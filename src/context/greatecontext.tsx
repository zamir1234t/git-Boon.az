import React, { createContext, useContext, useEffect, useState } from 'react';

interface CartItem {
  id: number;
  img: string;
  title: string;
  AZN: string;
  discount: string;
  count: number;
}

interface OrderDetails {
  orderId: string;
  fullName: string;
  phone: string;
  city: string;
  messenger: string;
  items: CartItem[];
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateItemCount: (id: number, count: number) => void;
  clearCart: () => void;
  promoCode: string;
  promoDiscount: number;
  setPromoCode: (code: string) => void;
  setPromoDiscount: (discount: number) => void;
  lastOrder: OrderDetails | null;
  setLastOrder: (order: OrderDetails) => void;
  clearLastOrder: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [promoCode, setPromoCode] = useState('');
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [lastOrder, setLastOrder] = useState<OrderDetails | null>(null);

  useEffect(() => {
    const localCart = localStorage.getItem('cart');
    if (localCart) {
      setCartItems(JSON.parse(localCart));
    }
    const localPromoCode = localStorage.getItem('promoCode');
    if (localPromoCode) {
      setPromoCode(localPromoCode);
    }
    const localPromoDiscount = localStorage.getItem('promoDiscount');
    if (localPromoDiscount) {
      setPromoDiscount(parseFloat(localPromoDiscount));
    }
    const localLastOrder = localStorage.getItem('lastOrder');
    if (localLastOrder) {
      setLastOrder(JSON.parse(localLastOrder));
    }
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    } else {
      localStorage.removeItem('cart');
    }
  }, [cartItems]);

  useEffect(() => {
    if (promoCode) {
      localStorage.setItem('promoCode', promoCode);
    } else {
      localStorage.removeItem('promoCode');
    }
    localStorage.setItem('promoDiscount', promoDiscount.toString());
  }, [promoCode, promoDiscount]);

  useEffect(() => {
    if (lastOrder) {
      localStorage.setItem('lastOrder', JSON.stringify(lastOrder));
    } else {
      localStorage.removeItem('lastOrder');
    }
  }, [lastOrder]);

  const addToCart = (item: CartItem) => {
    const uniqueId = Math.random() * 1000000;
    setCartItems((prev) => [...prev, { ...item, id: uniqueId, count: 1 }]);
  };

  const removeFromCart = (id: number) => {
    console.log('Removing item with id:', id);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateItemCount = (id: number, count: number) => {
    console.log('Updating item count for id:', id, 'to:', count);
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: Math.max(1, count) } : item
      )
    );
  };

  const clearCart = () => {
    console.log('Clearing all items');
    setCartItems([]);
    setPromoCode('');
    setPromoDiscount(0);
  };

  const clearLastOrder = () => {
    setLastOrder(null);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateItemCount,
        clearCart,
        promoCode,
        promoDiscount,
        setPromoCode,
        setPromoDiscount,
        lastOrder,
        setLastOrder,
        clearLastOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};