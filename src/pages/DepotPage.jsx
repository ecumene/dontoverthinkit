import React, { useState } from "react";
import { depotItems } from "../depot-data.js";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Info, ShareNetwork, Copy, X } from "@phosphor-icons/react";

export default function DepotPage() {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const budget = 200;

  const addToCart = (item) => {
    const countInCart = getCartItemCount(item.id);
    if (countInCart >= item.max_quantity) return;
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.id === itemId);
      if (itemIndex > -1) {
        const newCart = [...prevCart];
        newCart.splice(itemIndex, 1);
        return newCart;
      }
      return prevCart;
    });
  };

  const getCartItemCount = (itemId) => {
    return cart.filter((item) => item.id === itemId).length;
  };

  const totalCost = cart.reduce((total, item) => total + item.price, 0);
  const remainingBudget = budget - totalCost;

  const groupedItems = depotItems.reduce((acc, item) => {
    const category = item.category || "Uncategorized";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  const generateCartText = () => {
    const itemCounts = cart.reduce((acc, item) => {
      acc[item.id] = (acc[item.id] || 0) + 1;
      return acc;
    }, {});

    let text = `My DO. IT 2025 Requisition:\n\n`;
    Object.entries(itemCounts).forEach(([id, count]) => {
      const item = depotItems.find((i) => i.id === id);
      text += `- ${item.name} (x${count})\n`;
    });
    text += `\nTotal Cost: $${totalCost.toFixed(2)}`;
    return text;
  };

  const copyToClipboard = () => {
    const textToCopy = generateCartText();
    navigator.clipboard.writeText(textToCopy).then(
      () => alert("Copied to clipboard!"),
      (err) => console.error("Failed to copy: ", err)
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-48 pb-12 font-sans">
      {/* Sticky Cart */}
      <aside className="sticky top-8 z-10 mb-8">
        <div className="border-2 border-black bg-white/80 backdrop-blur-sm p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold">Your Requisition</h2>
              <div className="flex items-center gap-2 mt-1 text-xs text-blue-700 bg-blue-50 border border-blue-200 p-2">
                <Info size={16} weight="bold" />
                <p>To ensure fair access, quantities on some items are limited.</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">
                Welcome, contestant! You have a <strong className="font-bold text-gray-800">${budget}</strong> budget.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                disabled={cart.length === 0}
                className="mt-2 flex items-center gap-2 border-2 border-black px-3 py-1 text-sm font-bold bg-purple-200 hover:bg-purple-400 disabled:bg-gray-200 disabled:cursor-not-allowed transition-colors"
              >
                <ShareNetwork size={16} weight="bold" />
                Save & Share
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t-2 border-black pt-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">Items in Cart</p>
              <p className="text-3xl font-black">{cart.length}</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">Total Cost</p>
              <p className="text-3xl font-black">${totalCost.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">Remaining Budget</p>
              <p className={`text-3xl font-black ${remainingBudget < 0 ? "text-red-500" : "text-green-500"}`}>${remainingBudget.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Items Grid */}
      <div className="space-y-12">
        {Object.entries(groupedItems).map(([category, items]) => (
          <section key={category}>
            <h3 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-black">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {items.map((item) => {
                const countInCart = getCartItemCount(item.id);
                const remainingStock = item.quantity - countInCart;
                const atMaxQuantity = countInCart >= item.max_quantity;

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] transition-shadow"
                  >
                    <div className="relative w-full h-48 bg-gray-100 border-b-2 border-black">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                      <h4 className="text-base font-bold leading-tight flex-grow">{item.name}</h4>
                      <p className="text-xs text-gray-500 mb-2 h-16 overflow-y-auto">{item.description}</p>

                      <div className="flex justify-between items-center mt-2">
                        <p className="text-lg font-black text-blue-600">${item.price.toFixed(2)}</p>
                        <div className="text-right">
                          <p className="text-xs text-gray-500">
                            {remainingStock > 0 ? `${remainingStock} in stock` : <span className="text-red-500 font-bold">Out of stock</span>}
                          </p>
                          <p className="text-xs text-gray-500">Max: {item.max_quantity}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          disabled={countInCart === 0}
                          className={`p-2 border-2 border-black transition-colors ${countInCart > 0 ? "bg-red-200 hover:bg-red-400" : "bg-gray-200 cursor-not-allowed"}`}
                        >
                          <Minus size={16} weight="bold" />
                        </button>
                        <span className="font-bold text-lg tabular-nums w-8 text-center">{countInCart}</span>
                        <button
                          onClick={() => addToCart(item)}
                          disabled={remainingStock <= 0 || atMaxQuantity}
                          className={`p-2 border-2 border-black transition-colors ${
                            remainingStock > 0 && !atMaxQuantity ? "bg-green-200 hover:bg-green-400" : "bg-gray-200 cursor-not-allowed"
                          }`}
                        >
                          <Plus size={16} weight="bold" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Share Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full max-w-lg p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">Share Your Requisition</h3>
                <button onClick={() => setIsModalOpen(false)} className="p-1 hover:bg-gray-200">
                  <X size={20} weight="bold" />
                </button>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-4 max-h-64 overflow-y-auto">
                <pre className="whitespace-pre-wrap font-mono text-sm">{generateCartText()}</pre>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 border-2 border-black px-4 py-2 text-sm font-bold bg-green-200 hover:bg-green-400 transition-colors"
                >
                  <Copy size={16} weight="bold" />
                  Copy to Clipboard
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
