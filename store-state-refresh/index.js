//? store 초기화 코드
const getDefaultState = () => {
  return {
    basic: {
      businessName: null,
      managerName: null,
      managerPhone: null,
      managerEmail: null,
      applyType: 2,
      website: null,
      email: null
    },
    info: {
      recruitField: null,
      title: null,
      logoImg: null,
      postcode: null,
      sido: null,
      sigungu: null,
      address: null,
      detailAddress: null,
      career: null,
      contractType: null,
      hireType: 1,
      closingDate: null
    },
    detailInfo: {
      mainBusiness: null,
      qualification: null,
      loyaltyPoints: null,
      welfare: null,
      importantNotes: null
    },
    logoImgInfo: {
      src: null,
      name: null,
      size: null
    },
    printSelectedRecruitItem: null
  }
}

//? state
export const state = getDefaultState()

//? mutation
export const mutations = {
  //Object.assign() 메서드는 출처 객체들의 모든 열거 가능한 자체 속성을 복사해 대상 객체에 붙여넣습니다. 그 후 대상 객체를 반환합니다.
  resetState(state) {
    Object.assign(state, getDefaultState())
  }
}

//? getters
export const getters = {
}

//? actions
export const actions = {
  resetStateAction({commit}) {
    commit('resetState')
  },
}
