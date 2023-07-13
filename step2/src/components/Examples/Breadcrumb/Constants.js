const categories = [
  {
    id: 1,
    name: "가전",
    products: [
      { id: 100001, name: "tv" },
      { id: 100002, name: "컴퓨터" },
      { id: 100003, name: "냉장고" },
    ]
  }, {
    id: 2,
    name: "음식",
    products: [
      { id: 200001, name: "피자" },
      { id: 200002, name: "치킨" },
      { id: 200003, name: "탕수육" },
    ]
  }, {
    id: 3,
    name: "도서",
    products: [
      { id: 300001, name: "반지의 제왕" },
      { id: 300002, name: "해리포터" },
      { id: 300003, name: "리액트 정복하기" },
    ]
  },
]

export const getCategories = () => {
  return categories;
}

export const getCategoryName = (id) => {
  return categories.find((category) => category.id == id).name;
}

export const getProducts = (id) => {
  return categories.find((category) => category.id == id).products;
}

export const getProductName = (categoryId, productId) => {
  if (categoryId != -1) {
    return getProducts(categoryId).find((product) => product.id == productId).name
  }
  /* to do: categoryId 없을 때도 구할 수 있도록 해보기 */
}

// 게터가 말을 안들어..
// class Crumbs {
//   constructor() {
//     this._crumbArray = [];
//   }

//   get crumbArray() {
//     return this._crumbArray;
//   }

//   push(path, label) {
//     this._crumbArray.push({"path": path, "label": label});
//     console.log("Crumbs.push: ", this._crumbArray);
//   }
// }

export const crumbs = (pathname) => {
  var crumbs = []; //new Crumbs();
  var categoryId = -1;
  var productId = -1;
  pathname.map((path, index) => {
    if (index == 0) {
      // crumbs.push({"path": "..", "label": "홈"});
      crumbs.push({ "path": "..", "label": "홈" });
    } else if (index == 1) {
      //crumbs.push("store", "카테고리 선택");
      if (path != "") {
        crumbs.push({ "path": "store", "label": "카테고리 선택" });
      }
    } else if (index == 2) {
      const crumb = getCategories().find((category) => category.id == path);
      categoryId = crumb.id;
      //crumbs.push(crumb.id, crumb.name);
      crumbs.push({ "path": "store/" + crumb.id, "label": crumb.name });
    } else {
      // const products = categories.find((category) => category.id == categoryId).products;
      const crumb = getProducts(categoryId).find((product) => product.id == path);
      productId = crumb.id;
      //crumbs.push(crumb.id, crumb.name);
      crumbs.push({ "path": "store/" + categoryId + "/" + crumb.id, "label": crumb.name });
    }
  });

  return crumbs;
}