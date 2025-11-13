import { useState } from "react";
import "./css/FloatingEstimator.css";

export default function FloatingEstimator({ onClose }) {

    const itemsList = [
        { id: 1, name: "Mirror", price: Math.floor(Math.random() * 4000) + 1000 },
        { id: 2, name: "Door", price: Math.floor(Math.random() * 8000) + 3000 },
        { id: 3, name: "Roof Work", price: Math.floor(Math.random() * 15000) + 5000 },
        { id: 4, name: "Furniture", price: Math.floor(Math.random() * 20000) + 7000 },
        { id: 5, name: "Bed", price: Math.floor(Math.random() * 18000) + 6000 },
        { id: 6, name: "Cupboard", price: Math.floor(Math.random() * 12000) + 4000 },
        { id: 7, name: "Bed", price: Math.floor(Math.random() * 18000) + 6000 },
        { id: 8, name: "Cupboard", price: Math.floor(Math.random() * 12000) + 4000 },

    ];

    // itemId -> quantity map
    const [qty, setQty] = useState({});

    const increment = (id) => {
        setQty(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    };

    const decrement = (id) => {
        setQty(prev => {
            const current = prev[id] || 0;
            if (current <= 1) {
                const updated = { ...prev };
                delete updated[id];
                return updated;
            }
            return { ...prev, [id]: current - 1 };
        });
    };

    const total = itemsList.reduce((sum, item) => {
        const count = qty[item.id] || 0;
        return sum + item.price * count;
    }, 0);

    return (
        <div className="estimator-overlay">
            <div className="estimator-box">

                <h2 className="title">Interior Cost Estimator</h2>

                <div className="item-section">
                    {itemsList.map(item => {
                        const count = qty[item.id] || 0;

                        return (
                            <div key={item.id} className="item-row">

                                <div className="item-info">
                                    <span className="item-name">{item.name}</span>
                                    <span className="item-price">₹{item.price}</span>
                                </div>

                                <div className="item-actions">

                                    {count === 0 ? (
                                        <button className="add-btn" onClick={() => increment(item.id)}>
                                            Add
                                        </button>
                                    ) : (
                                        <div className="qty-box">
                                            <button className="qty-btn" onClick={() => decrement(item.id)}>
                                                -
                                            </button>
                                            <span className="qty-number">{count}</span>
                                            <button className="qty-btn" onClick={() => increment(item.id)}>
                                                +
                                            </button>
                                        </div>
                                    )}

                                </div>

                            </div>
                        );
                    })}
                </div>

                <div className="total-section">
                    <h3>Total Price:</h3>
                    <h2>₹{total}</h2>
                </div>

                <button className="close-btn" onClick={onClose}>✕</button>

            </div>
        </div>
    );
}   