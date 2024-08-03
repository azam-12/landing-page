import { createSlice } from "@reduxjs/toolkit";

const appoloSlice = createSlice({
  name: "appolo",
  initialState: {
    appoloObj: {
        title: "Apollo is your go-to-market copilot",
        desc: "Find buyers, close deals, and watch your business grow with Apollo's end-to-end sales solution, powered by AI.",
        image: "https://netlify.apollo.io/_next/image?url=https%3A%2F%2Fnetlify.apollo.io%2F_next%2Fstatic%2Fmedia%2Ffounders.46d38e42.png&w=640&q=75",
        collection: [
          {
            id:101,
            title: "Contact & Account Search",
            desc: "Find the right leads at the right time",
          },
          {
            id:102,
            title: "Sales Engagement",
            desc: "Grow your business with on-the-nose outbound",
          },
          {
            id:103,
            title: "Workflows",
            desc: "Save time with winning, out-of-the-box sales plays",
          },
          {
            id:104,
            title: "Deal Management",
            desc: "Effortlessly manage your pipeline",
          },
        ]
      },
  },
  reducers: {
    setAppoloObj: (state, action) => {
      state.appoloObj = action.payload;
    },
  },
});

export const { setAppoloObj } = appoloSlice.actions;
export default appoloSlice.reducer;
