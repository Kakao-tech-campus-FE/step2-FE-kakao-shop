import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type CarouselOptions = {
  data: any[];
  slideItemWidth: number; // 슬라이드 될 아이템 가로 길이
  slideCount: number; // 슬라이드 넘어가는 개수
};

export default function useCarousel(options: CarouselOptions) {
  const { slideCount, data, slideItemWidth } = options;
  const slideRef = useRef<HTMLDivElement>(null);
  const [isDisabled, setIsDisabled] = useState(false); // 이동 버튼 클릭시 버튼 비활성화 시키기 위한 상태
  const [currentSlide, setCurrentSlide] = useState(slideCount); // 현재 슬라이드 값
  const [isAnimation, setIsAnimaion] = useState(true); // 슬라이드 애니메이션 여부 -> 무한 슬라이드 구현 시 인덱스 초기화 시에는 에니메이션 사용X
  const [isFlowing, setIsFlowing] = useState(true); // 이 값이 true 이면 자동 슬라이드 실행
  const [dataList, setDataList] = useState(data);
  const ORIGINAL_IMAGE_LENGTH = data.length; // 원본 배열 길이

  // 최초 슬라이드 포커스 된 요소 인덱스
  // 무한 슬라이드를 위해 기본 데이터의 * 3을 하고 중앙값을 찾기위해 2를 나눈다.
  const initialFocusSlideIndex = useMemo(() => {
    return Math.floor((ORIGINAL_IMAGE_LENGTH * 3) / 2);
  }, [ORIGINAL_IMAGE_LENGTH]);
  // 최초 이미지 리스트를 [이전] [중앙] [다음] 상태로 넣어줌 -> 무한 슬라이드를 위해서
  useEffect(() => {
    setDataList([...data, ...data, ...data]);
  }, [data]);

  //  화면이 리사이즈 될 동안에는 애니메이션, 화면 슬라이드 막기
  useEffect(() => {
    const handleResize = () => {
      setIsAnimaion(false);
      setIsFlowing(false);
      setTimeout(() => {
        setIsFlowing(true);
        setIsAnimaion(true);
      }, 500);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const timer = useRef<NodeJS.Timeout>();
  // 슬라이드 이동 버튼 클릭 시 버튼 비활성화 시키기
  // 후에 나오는 `이미지 바꿔치기가 500ms 이므로 600ms의 값을 줌.
  const onDisabledButton = () => {
    setIsDisabled(true);
    timer.current = setTimeout(() => {
      setIsDisabled(false);
    }, 600);
  };

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  // 다음 슬라이드 이동 버튼
  const onNextSlide = useCallback(() => {
    onDisabledButton();
    setCurrentSlide(currentSlide + slideCount);
  }, [currentSlide, slideCount]);

  // 이전 슬라이드 이동 버튼
  const onPrevSlide = useCallback(() => {
    onDisabledButton();
    setCurrentSlide(currentSlide - slideCount);
  }, [currentSlide, slideCount]);

  useEffect(() => {
    if (!slideRef.current) return;
    //현재 슬라이드가 이미지 갯수를 넘어갔을 경우 초기 상태로 몰래 바꿔치기하는 작업
    if (currentSlide === ORIGINAL_IMAGE_LENGTH + 1 || currentSlide * -1 === ORIGINAL_IMAGE_LENGTH - 1) {
      setTimeout(() => {
        setIsAnimaion(false); // 바꿔치기할 때 animation을 잠깐 끔 (사용자에게 들키지 않기 위해 )
        if (slideRef.current) {
          // 초기값으로 되돌려준다.
          slideRef.current.style.left = `${initialFocusSlideIndex * slideItemWidth * -1}px`;
        }
        setCurrentSlide(slideCount);
      }, 500);

      // 바꿔치기 성공한 뒤에 animation을 바로 킴
      setTimeout(() => {
        setIsAnimaion(true);
      }, 600);
    }

    // 슬라이더 이동
    slideRef.current.style.transform = `translateX(${-slideItemWidth * (currentSlide - slideCount)}px)`;
  }, [currentSlide, slideItemWidth, slideCount, ORIGINAL_IMAGE_LENGTH, initialFocusSlideIndex]);

  // 무한 슬라이드를 위해 setInterval 사용
  // currentSlice가 변경되면 바로위 useEffect가 발생
  useEffect(() => {
    let intervalId: NodeJS.Timer;
    if (isFlowing) {
      intervalId = setInterval(() => {
        setCurrentSlide(currentSlide + slideCount);
      }, 3000);
    }
    return () => clearTimeout(intervalId);
  }, [isFlowing, currentSlide, slideCount]);

  const onChangeFlowing = (value: boolean) => {
    setIsFlowing(value);
  };

  // 마우스 스와이프, 터치 스와이프
  const [touchStartClientX, setTouchStartClientX] = useState(0);
  const [touchEndClientX, setTouchEndClientX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // 스와이프 이동 범위 설정 -> 이동 범위 이상으로 이동해야 슬라이드가 이동됨
  const moveRange = useMemo(() => {
    return Math.floor(slideItemWidth / 5);
  }, [slideItemWidth]);

  // 이동 된 거리
  const touchMoveDistance = useMemo(() => {
    return touchEndClientX - touchStartClientX;
  }, [touchEndClientX, touchStartClientX]);

  // 터치 시작
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    onChangeFlowing(false);
    setIsAnimaion(false);
    setTouchStartClientX(e.touches[0].clientX);
    setTouchEndClientX(e.touches[0].clientX);
  };

  // 손가락이 화면에 닿여있는 상태로 움직일 떄
  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndClientX(e.touches[0].clientX);
  };

  // 손가락을 땔때
  const onTouchEnd = () => {
    onChangeFlowing(true);
    setIsAnimaion(true);
    if (touchMoveDistance > moveRange) onPrevSlide();
    if (touchMoveDistance < moveRange * -1) onNextSlide();
    setTouchStartClientX(0);
    setTouchEndClientX(0);
  };

  // 마우스 스와이프를 위한 아래의 4가지 함수
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    onChangeFlowing(false);
    setTouchStartClientX(e.clientX);
    setTouchEndClientX(e.clientX);
    setIsDragging(true);
    setIsAnimaion(false);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setTouchEndClientX(e.clientX);
  };

  const onMouseOut = () => {
    setIsDragging(false);
    setIsAnimaion(true);
    setTouchEndClientX(0);
    setTouchStartClientX(0);
  };

  const onMouseUp = () => {
    setIsAnimaion(true);
    if (touchMoveDistance > moveRange) onPrevSlide();
    if (touchMoveDistance < moveRange * -1) onNextSlide();
    setTouchStartClientX(0);
    setTouchEndClientX(0);
    setIsDragging(false);
  };

  return {
    slideRef,
    isAnimation,
    initialFocusSlideIndex,
    dataList,
    onPrevSlide,
    onNextSlide,
    onChangeFlowing,
    isDisabled,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    touchMoveDistance,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onMouseOut,
  };
}
