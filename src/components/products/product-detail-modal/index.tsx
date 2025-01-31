import { Button, Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useBreakpointValue } from "@chakra-ui/react";
import { Product } from "../../types";
import { BsChatRightText } from "react-icons/bs";
import { useProducts } from "../products-provider";

interface ProductDetailModalProps {
  onClose: () => void;
  product: Product;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  onClose,
  product
}) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const {handleWhastappClick} = useProducts();

  return (
    <Modal isOpen onClose={onClose}>
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(5px) hue-rotate(90deg)"
      />
      <ModalContent
        mx={isMobile ? 4 : 0}
        borderRadius={"30px"}
        bg={"#E1E6E2"}
        border={"1px solid #768B7C"}
      >
        <ModalHeader>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody pt={"16px"}>
          <img src={product.imageUrl} alt={product.name} />
          <Flex flexDir={"row"} gap={"16px"} justify={"center"} mt={4}>
            <Heading as={isMobile ? "h3" : "h4"} fontWeight={400}>
              {product.name}
            </Heading>
            <Heading as={isMobile ? "h3" : "h4"}>
              <strong>
                ${product.price} {product.unit}
              </strong>
            </Heading>
          </Flex>

          <Text mt={4} textAlign={"left"}>
            {product.description}
          </Text>
        </ModalBody>

        <ModalFooter>
          <Flex justify={"center"} w={"100%"}>
            <Button
              leftIcon={<BsChatRightText />}
              variant={"primary"}
              mr={3}
              onClick={handleWhastappClick}
            >
              Contáctanos por whatsapp
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ProductDetailModal;