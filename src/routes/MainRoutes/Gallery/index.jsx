import React from "react";

export default function Gallery(props) {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-[0.5fr_1fr] gap-6">
                <aside className="bg-gray-">
                    <div className="border-2 border-grey7">
                        <h4>Filters</h4>
                    </div>
                </aside>
                <main className="bg-red-500">Content</main>
            </div>
        </div>
    );
}
