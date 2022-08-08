import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Customer {
  id: string;
  name: string;
  food: string[];
}

interface CustomerState {
  value: Customer[];
}

interface AddFoodToCustomerType {
  id: string;
  food: string;
}

const initialState: CustomerState = {
  value: [],
};

export const customerSlice = createSlice({
  name: "cumtomer",
  initialState,
  reducers: {
    addCustomer(state, action: PayloadAction<Customer>) {
      state.value.push(action.payload);
    },
    addFoodToCustomer: (
      state,
      action: PayloadAction<AddFoodToCustomerType>
    ) => {
      const customer = state.value.find(
        (customer) => customer.id === action.payload.id
      );
      if (customer) {
        customer.food.push(action.payload.food);
      }
    },
  },
});

export const { addCustomer, addFoodToCustomer } = customerSlice.actions;

export default customerSlice.reducer;
