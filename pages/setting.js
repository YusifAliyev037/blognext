import { getBlogs, rmvBlogId } from '@/Services/articles';
import { useFetchData } from '@/shared/hooks/useFetchData';
import { shortText } from '@/shared/utils/shortText';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { 
    Box, 
    Button, 
    ButtonGroup, 
    IconButton, 
    Image, 
    Modal, 
    ModalBody, 
    ModalCloseButton, 
    ModalContent, 
    ModalFooter, 
    ModalHeader, 
    ModalOverlay, 
    Table, 
    TableContainer, 
    Tbody, 
    Td, 
    Text, 
    Th, 
    Thead, 
    Tooltip, 
    Tr, 
    useDisclosure, 
    useToast 
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
const Header = dynamic(()=>import('@/shared/components/Header'),{ssr:false})


function Setting() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const toast = useToast();
  
    const {push} = useRouter()
  
    const { data,setData } = useFetchData({
      requestFn: () => getBlogs(),
    });
  
    const [currentItem, setCurrentItem] = useState();
  
    const handleRemove = async () => {
      try {
     
        await rmvBlogId(currentItem?.id);
  
        const newFilter = data?.filter((item) => item.id != currentItem?.id);
        setData(newFilter);
  
        toast({
          title: "Blog deleted.",
          status: "success",
          colorScheme: "teal",
          duration: 2000,
          isClosable: true,
        });
  
        onClose();
      } catch (err) {
        toast({
          title: err?.message,
          status: "error",
          colorScheme: "red",
          duration: 2000,
          isClosable: true,
        });
      }
    };
  
    return (
      <>
        <Header />
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Remove Article</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight={700}>{currentItem?.title}</Text>{" "}
              <span>adindaki meqaleni silmeye eminsinizmi</span>
            </ModalBody>
  
            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="red" onClick={handleRemove}>
                Delete
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
  
        <Box py={100} px={160}>
          <Text align={"center"} fontWeight={600} fontSize="6xl">
            Setting
          </Text>
  
          <TableContainer>
            <Table colorScheme="whatsapp">
              <Thead>
                <Tr>
                  <Th>Cover url</Th>
                  <Th>Title</Th>
                  <Th colSpan={2}>Desc</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data
                  ?.filter((item, index) => item.id > 100)
                  ?.map((item) => (
                    <Tr key={"iteTrm-" + item?.id}>
                      <Td>
                        <Image
                          alt='#'
                          width={10}
                          height={10}
                          borderRadius={10}
                          objectFit={"cover"}
                          src={item?.cover_url}
                        />
                      </Td>
                      <Td>
                        <Tooltip label={item?.title}>
                          {shortText(item?.title, 15)}
                        </Tooltip>
                      </Td>
                      <Td>{shortText(item?.desc, 15)}</Td>
                      <Td>
                        <ButtonGroup>
                          <IconButton
                            colorScheme="teal"
                            onClick={() =>
                                push(
                                "/articles/create" + `?blog_id=${item?.id}`
                              )
                            }
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            colorScheme="red"
                            onClick={() => {
                              setCurrentItem(item);
                              onOpen();
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </ButtonGroup>
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </>
    );
}

export default Setting