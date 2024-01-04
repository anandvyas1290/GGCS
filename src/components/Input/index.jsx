import React from "react";

export default function Input({ className, label, placeholder }) {
    return (
        <div>
            <label htmlFor="#input"></label>
            <input id="input" />
        </div>
    );
}
