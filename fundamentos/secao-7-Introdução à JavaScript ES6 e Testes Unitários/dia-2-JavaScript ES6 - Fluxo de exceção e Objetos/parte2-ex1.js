const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60
    },
  };
  
  const customerInfo = (order) => {
    
    const customer = order.order.delivery.deliveryPerson;
    const person = order.name;
    const phone = order.phoneNumber;
    const address = order.address;
    const info = `Olá ${customer}, entrega para: ${person}, Telefone: ${phone}, R. ${address.street} Nº: ${address.number}, AP: ${address.apartment}`
    return info;
  };

  console.log(customerInfo(order));
  
  const orderModifier = (order) => {
    order.name = 'Luiz Silva';
    order.payment.total = 50;
    return `Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza).join(', ')} e ${order.order.drinks.coke.type} é R$ ${order.payment.total}`;
  };
  
  console.log(orderModifier(order));