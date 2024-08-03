import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name: "head",
    initialState: {
        hoverIndex: null,
        isScrollDown: false, 
        headerBgColor: "bg-transparent",
        imageContents: {
            imagePath: "https://netlify.apollo.io/_next/image?url=https%3A%2F%2Fnetlify.apollo.io%2F_next%2Fstatic%2Fmedia%2Fcontact-account-search.79b0a060.png&w=640&q=75", 
            imageTitle: "Contact & Account Search",
            imageDesc: "Find the right leads and companies",
            imageBgColor: "#3b82f6",
            titleBgColor: "#eff6ff",
            isClicked: true,
        },
    },
    reducers: {
        setHoverIndex: (state, action) => {
            state.hoverIndex = action.payload;
        },
        setIsScrollDown: (state, action) => {
            state.isScrollDown = !state.isScrollDown;
        },
        setHeaderBgColor: (state, action) => {
            state.headerBgColor = action.payload;
        },
        setImageContents: (state, action) => {
            state.imageContents = action.payload;
        }
    }
}); 

export const { setHoverIndex, setIsScrollDown, setHeaderBgColor, setImageContents } = headerSlice.actions;
export default headerSlice.reducer;