import APIService from './api.service';

const DrugSupplementService = {
  getOpenFDADrugs: (genericName: string) => {
    return APIService().post('/', {
      query : `
        openFDADrugs(genericName:"${genericName}"){
          genericName
          pharmClass
          brandName
          manufacturerName
          productType
          route
        }
      `,
    });
  },
  getDrugSupplements: async () => {
    const response = await APIService().post('/', {
      query: `
        {
          drugs {
            name
            description
            activeIngredient
            concentration
            unit
            quantity
            presentation
          }
        }
      `,
    });
    return response.data.data.drugs;
  },
  getDrugSupplement: (id: string) => {
    return APIService().post('/', {
      query: `
        {
          drugs(id: ${id}) {
            name
            description
            activeIngredient
            concentration
            unit
            quantity
            presentation
          }
        }
      `,
    });
  },
};

export default DrugSupplementService;
