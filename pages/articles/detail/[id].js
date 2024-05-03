import { getBlogId } from '@/Services/articles'
import { selFavorites, toggleFavorite } from '@/redux/global/globalSlice'
import Breadcrumbs from '@/shared/components/Breadcrumb'
import Header from '@/shared/components/Header'
import { converTime } from '@/shared/utils/convertTime'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Box, Button, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function DetailId(props) {
  const articleItem = props.data

  const favorites = useSelector(selFavorites);
  const dispatch = useDispatch()

  const isFav = favorites.find((item)=> item.id == articleItem.id);
 

  const handleToggleFav = ()=>{
    const payload = {id:articleItem.id, data:articleItem};

    dispatch(toggleFavorite(payload))
    
  }

  return (
    <>
    <Header />
    <Breadcrumbs routes={["Articles", articleItem?.title]}/>
    

    <SimpleGrid bg="gray.50" columns={{sm:2}} spacing="2" p="10" >
    <Box as='section'>
        <Image  src={articleItem?.cover_url} alt={articleItem?.title}></Image>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="flex-start" gap="16px">
      <Text
        bgClip="text"
        fontSize="md"
        fontWeight="medium"
        color="gray"
      >
           {converTime(+articleItem?.created)}
      </Text>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="2xl"
        fontWeight="extrabold"
      >
              {articleItem?.title} 
      </Text>
      <Text
        bgClip="text"
        fontSize="lg"
        fontWeight="medium"
        color="gray"
      >
            {articleItem?.desc}
      </Text>
     <Button 
        onClick={handleToggleFav}
        alignSelf="flex-start" 
        leftIcon={isFav ? <MinusIcon/> : <AddIcon/>} 
        colorScheme={isFav ? "red" : "green"}>{isFav ? "Remove" : "Add"}Favorite</Button>
      </Box>
      </SimpleGrid>
    

  </>
  )
}

export default DetailId


export async function getServerSideProps({query}){
    try{
      const res = await getBlogId(query.id)
      console.log(res.data);
      return{props:{
        data: res.data
      }}
    }catch(err){
      return{
        redirect:"/404"
      }
    }
}