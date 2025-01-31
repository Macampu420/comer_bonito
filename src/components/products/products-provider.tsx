import { createContext, useContext, useState } from "react";
import { Product } from "../types";
import { useDisclosure } from "@chakra-ui/react";
import { products } from "./products-carrousel/data";

interface ProductContext {
  products: Product[];
  selectedProduct: Product | null;
  isProductModalOpen: boolean;
  openProductModal: (product: Product) => void;
  closeProductModal: () => void;
  handleWhastappClick: () => void;
}

const ProductsContext = createContext<ProductContext | null>(null);

const ProductsProvider = ({ children }:{
  children: React.ReactNode
}) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleWhastappClick = () => {
    const phoneNumber = "573107299391";
    const messageWithProduct = encodeURIComponent(`Hola, estoy interesado en el producto ${selectedProduct?.name}. ¿Podrías darme más información?`);
    const messageWithoutProduct = encodeURIComponent("Hola, estoy interesado en tus productos. ¿Podrías darme más información?");
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${selectedProduct ? messageWithProduct : messageWithoutProduct}`;

    window.open(whatsappLink, "_blank");
  }

  return <ProductsContext.Provider value={{
    products,
    selectedProduct,
    isProductModalOpen: isOpen,
    openProductModal: (product) => {
      setSelectedProduct(product);
      onOpen();
    },
    closeProductModal: () => {
      setSelectedProduct(null);
      onClose();
      },
    handleWhastappClick
  }}>{children}</ProductsContext.Provider>;
};

const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { ProductsProvider, useProducts };