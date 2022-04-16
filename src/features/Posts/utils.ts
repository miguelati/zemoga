import {StackNavigationOptions} from '@react-navigation/stack';

export interface GetHeaderStyleInterface {
  backgroundColor: string;
  color: string;
  align?: 'left' | 'center' | undefined;
}

export const getHeaderStyle = ({
  backgroundColor,
  color,
  align = 'left',
}: GetHeaderStyleInterface): StackNavigationOptions => ({
  headerStyle: {
    backgroundColor,
  },
  headerTitleStyle: {
    color,
  },
  headerTitleAlign: align,
});
