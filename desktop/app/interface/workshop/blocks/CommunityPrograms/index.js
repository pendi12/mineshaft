/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import {Flex} from 'particles'
import {Heading, Paragraph} from 'atomic'

/* ------------------------------- Component -------------------------------- */
export default props => (
<div>
<Flex justify={['space-evenly']} wrap="wrap" >
    <Flex align={['left']} direction={['column']} w={[1,1, 0.25]} px={[10,15,20]} >
    <Heading f={[3]} color='orange' level={[5]}>Open Source Project</Heading>
    <Paragraph f={[1]}>Integer laoreet ut ex et pretium. Morbi tincidunt vulputate tempor. Praesent ex diam, rutrum pretium nulla vitae, ultricies sagittis neque. </Paragraph>
    </Flex>
    <Flex align={['left']}  direction={['column']} w={[1,1, 0.25]} px={[10,15,20]}>
    <Heading f={[3]} level={[5]} color='amber'>Open Source Project</Heading>
    <Paragraph f={[1]}>Integer laoreet ut ex et pretium. Morbi tincidunt vulputate tempor. Praesent ex diam, rutrum pretium nulla vitae, ultricies sagittis neque. </Paragraph>
    </Flex>
    <Flex align={['left']} direction={['column']} w={[1,1, 0.25]} px={[10,15,20]}>
    <Heading f={[3]} level={[5]} color='green'>Open Source Project</Heading>
    <Paragraph f={[1]}>Integer laoreet ut ex et pretium. Morbi tincidunt vulputate tempor. Praesent ex diam, rutrum pretium nulla vitae, ultricies sagittis neque. </Paragraph>
    </Flex>
    <Flex align={['left']} direction={['column']} w={[1,1, 0.25]} px={[10,15,20]}>
    <Heading f={[3]} color='turquoise' level={[5]}>Open Source Project</Heading>
    <Paragraph f={[1]}>Integer laoreet ut ex et pretium. Morbi tincidunt vulputate tempor. Praesent ex diam, rutrum pretium nulla vitae, ultricies sagittis neque. </Paragraph>
    </Flex>
</Flex>

<Flex justify={['space-evenly']} mt={[20,40]} wrap="wrap" display={['none', 'none', 'flex']} >
    <Flex align={['left']} direction={['column']} w={[1,1, 0.25]} px={[10,15,20]} >
    <Heading f={[3]} color='blueLight' level={[5]}>Open Source Project</Heading>
    <Paragraph f={[1]}>Integer laoreet ut ex et pretium. Morbi tincidunt vulputate tempor. Praesent ex diam, rutrum pretium nulla vitae, ultricies sagittis neque. </Paragraph>
    </Flex>
    <Flex align={['left']}  direction={['column']} w={[1,1, 0.25]} px={[10,15,20]}>
    <Heading f={[3]} color='purple' level={[5]}>Open Source Project</Heading>
    <Paragraph f={[1]}>Integer laoreet ut ex et pretium. Morbi tincidunt vulputate tempor. Praesent ex diam, rutrum pretium nulla vitae, ultricies sagittis neque. </Paragraph>
    </Flex>
    <Flex align={['left']} direction={['column']} w={[1,1, 0.25]} px={[10,15,20]}>
    <Heading f={[3]} color='cyan' level={[5]}>Open Source Project</Heading>
    <Paragraph f={[1]}>Integer laoreet ut ex et pretium. Morbi tincidunt vulputate tempor. Praesent ex diam, rutrum pretium nulla vitae, ultricies sagittis neque. </Paragraph>
    </Flex>
    <Flex align={['left']} direction={['column']} w={[1,1, 0.25]} px={[10,15,20]}>
    <Heading f={[3]} color='red' level={[5]}>Open Source Project</Heading>
    <Paragraph f={[1]}>Integer laoreet ut ex et pretium. Morbi tincidunt vulputate tempor. Praesent ex diam, rutrum pretium nulla vitae, ultricies sagittis neque. </Paragraph>
    </Flex>
</Flex>
</div>)
