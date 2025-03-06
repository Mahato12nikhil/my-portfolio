import Home from "@/pages/home/Home"
import { store } from "@/state/store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";


test("Render Home page correctly",()=>{
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Home/>
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getAllByText(/Nikhil Mahato/i));

})