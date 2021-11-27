import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text, Button } from '@chakra-ui/react';

export const Banner = ({purpose, imageUrl, title1, title2, linkName, buttonText, desc1, desc2}) => {
    return(
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
        <Image src={imageUrl} alt="banner" width={500} height={300} />
        <Box p="5"> 
            <Text fontWeight="medium" color="gray.500" fontSize="sm">{purpose}</Text>
            <Text fontWeight="bold"fontSize="3xl">{title1}<br />{title2}</Text>
            <Text pt="3" pb="3" color="gray.700" fontSize="lg">{desc1}<br />{desc2}</Text>
            <Button fontSize="xl"><Link href={linkName}>{buttonText}</Link></Button>
        </Box>
    </Flex>
    )
}