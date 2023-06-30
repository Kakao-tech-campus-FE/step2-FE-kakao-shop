import { keyframes } from 'styled-components';
import { type Keyframes } from 'styled-components/dist/types';

interface ISlideObj {
  [position: string]: {
    'slide-in': Keyframes;
    'slide-out': Keyframes;
  };
}

const slideObj: ISlideObj = {
  'top-right': {
    'slide-in': keyframes`
  from{
    transform: translate3d(110%,0,0);
  }
  to{
    transform: translate3d(0, 0, 0);
  }
  `,
    'slide-out': keyframes`
  from{
    transform: translate3d(0,0,0);
  }to{
    transform: translate3d(110%,0,0);
  }
  `,
  },
  'top-center': {
    'slide-in': keyframes`
  from{
    transform: translate3d(0,110%,0);
  }
  to{
    transform: translate3d(0, 0, 0);
  }`,
    'slide-out': keyframes`
  from{
    transform: translate3d(0,0,0);
  }to{
    transform: translate3d(0,110%,0)
  }
  `,
  },
  'top-left': {
    'slide-in': keyframes`
  from{
    transform: translate3d(-110%,0,0)
  }
  to{
    transform: translate3d(0,0,0)
  }
  `,
    'slide-out': keyframes`
  from{
    transform: translate3d(0,0,0)
  }to{
    transform: translate3d(-110%,0,0)
  }
  `,
  },
  'bottom-right': {
    'slide-in': keyframes`
from{
  transform: translate3d(110%,0,0);
}
to{
  transform: translate3d(0, 0, 0);
}
`,
    'slide-out': keyframes`
from{
  transform: translate3d(0,0,0);
}to{
  transform: translate3d(110%,0,0);
}
`,
  },
  'bottom-center': {
    'slide-in': keyframes`
from{
  transform: translate3d(0,110%,0);
}
to{
  transform: translate3d(0, 0, 0);
}`,
    'slide-out': keyframes`
from{
  transform: translate3d(0,0,0);
}to{
  transform: translate3d(0,110%,0)
}
`,
  },
  'bottom-left': {
    'slide-in': keyframes`
  from{
    transform: translate3d(-110%,0,0)
  }
  to{
    transform: translate3d(0,0,0)
  }
  `,
    'slide-out': keyframes`
  from{
    transform: translate3d(0,0,0)
  }to{
    transform: translate3d(-110%,0,0)
  }
  `,
  },
};

export default slideObj;
