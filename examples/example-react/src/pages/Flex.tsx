import { Box } from '@fower/react';

export default () => {
  return (
    <Box>
      <Box as="h2">Row</Box>
      <Box spaceX3 row>
        <Box bgOrange400 p10>
          A
        </Box>
        <Box bgOrange400 p10>
          B
        </Box>
        <Box bgOrange400 p10>
          C
        </Box>
      </Box>

      <Box as="h2">Column</Box>
      <Box spaceY3 column>
        <Box bgOrange400 p6>
          A
        </Box>
        <Box bgOrange400 p6>
          B
        </Box>
        <Box bgOrange400 p6>
          C
        </Box>
      </Box>

      <Box as="h2">Row Reverse</Box>
      <Box flex flexDirection="row-reverse">
        <Box bgOrange400 p6 m3>
          A
        </Box>
        <Box bgOrange400 p6 m3>
          B
        </Box>
        <Box bgOrange400 p6 m3>
          C
        </Box>
      </Box>

      <Box as="h2">Column Reverse</Box>
      <Box flex flexDirection="column-reverse">
        <Box bgOrange400 p6 m3>
          A
        </Box>
        <Box bgOrange400 p6 m3>
          B
        </Box>
        <Box bgOrange400 p6 m3>
          C
        </Box>
      </Box>

      <Box as="h2">Flex Initial</Box>
      <Box spaceX3 flexInitial>
        <Box bgOrange400 p10>
          Short
        </Box>
        <Box bgOrange400 p10>
          Medium length
        </Box>
      </Box>

      <Box as="h2">Flex Initial</Box>
      <Box spaceX3 flexInitial>
        <Box bgOrange400 p4>
          Short
        </Box>
        <Box bgOrange400 p4>
          Medium length
        </Box>
        <Box bgOrange400 p4>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ad
          labore ipsam, aut rem quo repellat esse tempore id, quidem
        </Box>
      </Box>

      <Box as="h2">Flex None</Box>
      <Box spaceX3 flexInitial>
        <Box bgOrange400 p4 flex={1}>
          Item that can grow or shrink if needed
        </Box>
        <Box bgOrange500 p4 flexNone>
          Item that cannot grow or shrink
        </Box>
        <Box bgOrange400 p4 flex="1">
          Item that can grow or shrink if needed
        </Box>
      </Box>

      <Box as="h2">Grow</Box>
      <Box spaceX3 row>
        <Box bgOrange400 p4>
          Normal
        </Box>
        <Box bgOrange500 p4 flexGrow={1}>
          Grow
        </Box>
        <Box bgOrange400 p4>
          Normal
        </Box>
      </Box>

      <Box as="h2">Not Grow</Box>
      <Box spaceX3 row>
        <Box bgOrange400 p4 flexGrow={1}>
          Grow
        </Box>
        <Box bgOrange500 p4 flexGrow={0}>
          Not Grow
        </Box>
        <Box bgOrange400 p4 flexGrow={1}>
          Grow
        </Box>
      </Box>

      <Box as="h2">Shrink</Box>
      <Box spaceX3 row>
        <Box bgOrange400 p4 w-100></Box>
        <Box bgOrange500 p4 flexShrink={1} w-600>
          Shrink
        </Box>
        <Box bgOrange400 p4 w-100></Box>
      </Box>

      <Box as="h2">Not Shrink</Box>
      <Box spaceX3 row>
        <Box bgOrange400 p4 w-100></Box>
        <Box bgOrange500 p4 flexShrink={0} w-600>
          Not Shrink
        </Box>
        <Box bgOrange400 p4 w-100></Box>
      </Box>

      <Box as="h2">No wrap</Box>
      <Box spaceX3 row flexNowrap>
        <Box bgOrange400 m2 p4 w-300></Box>
        <Box bgOrange500 m2 p4 w-300></Box>
        <Box bgOrange400 m2 p4 w-300></Box>
      </Box>

      <Box as="h2">wrap</Box>
      <Box spaceX3 row flexWrap>
        <Box bgOrange400 m2 p4 w-300></Box>
        <Box bgOrange500 m2 p4 w-300></Box>
        <Box bgOrange400 m2 p4 w-300></Box>
      </Box>

      <Box as="h2">wrap reverse</Box>
      <Box spaceX3 row flexWrapReverse>
        <Box bgOrange400 m2 p4 w-300></Box>
        <Box bgOrange500 m2 p4 w-300></Box>
        <Box bgOrange400 m2 p4 w-300></Box>
      </Box>
    </Box>
  );
};
