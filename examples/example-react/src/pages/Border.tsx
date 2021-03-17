import React from 'react';
import { View, Box } from '@styli/react';

export default () => {
  return (
    <View>
      <Box>Border</Box>
      <View f-12 wrap space-10>
        <View s-100 border>
          border
        </View>

        <View s-100 border-2>
          border-2
        </View>

        <View s-100 border borderRed50>
          borderRed50
        </View>

        <View s-100 border-2 borderRed50 borderDashed>
          borderDashed
        </View>

        <View s-100 border="1px solid gray">
          border="1px solid gray"
        </View>

        <View s-100 border="4px solid green30-O50">
          border="4px solid green30-D20"
        </View>

        <View s-100 borderT="4px solid  green400">
          borderT="1px solid green400"
        </View>

        <View s-100 borderR="1px solid gray">
          borderR="1px solid gray"
        </View>

        <View s-100 borderB="1px solid gray">
          borderB="1px solid gray"
        </View>

        <View s-100 borderL="1px solid gray">
          borderL="1px solid gray"
        </View>

        <View s-100 border="4px solid gray" border--hover="4px solid red30-D5">
          border--hover="1px solid red30"
        </View>

        <View
          s-100
          borderTopWidth={1}
          borderTopStyle="solid"
          borderTopColor="brown"
        >
          borderTopWidth="1px" BorderTopStyle="solid" borderTopColor="brown"
        </View>
      </View>
    </View>
  );
};