import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from "./TodoForm";

describe("Basic rendering of the list", () => {
    it("should render the edit button", () => {
        expect(screen.queryByTestId('edit-button')).toBeDefined();
    });
    it("should render the add todo button", () => {
        expect(screen.queryByTestId('todo-button')).toBeDefined();
    });
    
});

describe("Should render the behaviour", () => {
    it("should add a todo when clicked on add todo", () => {
        const logSpy = jest.spyOn(console, "log");
        const { getByTestId } = render(<TodoForm />);
        expect(getByTestId("todo-button")).toBeTruthy();
        fireEvent.submit(getByTestId("form"));
        expect(logSpy).toHaveBeenCalledTimes(1);
    })
})

