const init = {
    monthlyEMI: "",
    tableData: [],
    history: [],
  };
  export const actionType = {
    READ_DATA: "READ",
    UPDATE_DATA: "UPDATE",
  };
  export const readData = () => {
    return {
      type: actionType.READ_DATA,
    };
  };
  
  export const updateData = (data) => {
    return {
      type: actionType.UPDATE_DATA,
      load: data,
    };
  };
  const reviewData = (load) => {
    const { amount, rate, tenure } = load;
    let useramount = parseInt(amount);
    let userrate = parseFloat(rate);
    let month = parseInt(tenure);
  
    let interest = userrate / 100 / 12;
  
    let x = Math.pow(1 + interest, month);
  
    let monthlyEMI = Math.round((useramount * x * interest) / (x - 1));
    let totalpayble = monthlyEMI * month;
    let intestamount = totalpayble - useramount;
    return {
      monthlyEMI,
      totalpayble,
      intestamount,
    };
  };
  const tableData = (load, data) => {
    let arr = [];
    let { amount, rate, tenure } = load;
    let { monthlyEMI } = data;
  
    amount = parseInt(amount);
    rate = parseFloat(rate);
    tenure = parseInt(tenure);
  
    let month = 1;
    let total = amount;
  
    while (month <= tenure && total !== 0) {
      let interestrate = rate / 12;
  
      let intrestEMI = Math.round((total * interestrate) / 100);
      let priciple = monthlyEMI - intrestEMI;
      total = total - priciple;
     
      let obj = {
        month,
  monthlyEMI,
      };
      arr.push(obj);
      month++;
    }
  
    return arr;
  };
  
  
  const storeLocal = (data, table, load) => {
    let { amount, rate, tenure } = load;
    amount = parseInt(amount);
    rate = parseFloat(rate);
    tenure = parseInt(tenure);
  
    let alldata = JSON.parse(localStorage.getItem("allemidata")) || [];
    let title = {
      amount,
      rate,
      tenure,
    };
  let emi = {
      data,
      table,
      title,
    };
    let newdata = [...alldata, emi];
  
    localStorage.setItem("allemidata", JSON.stringify(newdata));
    return newdata;
  };
  
  const emidatareducer = (detail = init, action) => {
    switch (action.type) {
      case actionType.UPDATE_DATA: {
        let data = reviewData(action.load);
        let table = tableData(action.load, data);
        let history = storeLocal(data, table, action.load);
        return {
          ...detail,
          ...data,
          tableData: table,
        history: history,
      };
    }

    case actionType.READ_DATA: {
      return {
        ...detail,
      };
    }

    default: {
      return { ...detail };
    }
  }
};

export { emidatareducer };
