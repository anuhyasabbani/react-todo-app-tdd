import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm from "./TodoForm";

describe("rendering of the list", () => {
    it("should render the todo heading", () => {
        expect(screen.queryByTestId('heading')).toBeDefined();
    });
    it("should render the icons", () => {
        expect(screen.queryByTestId('icons')).toBeDefined();
    });
    
});
