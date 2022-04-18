import React, {FC, useMemo} from 'react';
import {Spinner, View} from 'native-base';
import {UseQueryResult} from 'react-query';

export interface ZQueryLoadingProps {
  flex?: number;
  height?: number;
  requests?: UseQueryResult[];
  request?: UseQueryResult;
  big?: boolean;
  children: JSX.Element;
}

const ZQueryLoading: FC<ZQueryLoadingProps> = ({
  requests,
  request,
  big = false,
  height = null,
  flex = 1,
  children,
}) => {
  const waiters = useMemo(
    () => (request ? [request] : requests),
    [request, requests],
  );

  const loading = useMemo(
    () => waiters?.some(req => req.isLoading || req.isRefetching),
    [waiters],
  );

  if (loading) {
    return (
      <View
        flex={height ? 0 : flex}
        height={height ? height : null}
        justifyContent="center"
        alignItems="center">
        <Spinner color="green.700" size={big ? 'lg' : 'sm'} />
      </View>
    );
  }

  return children;
};

export {ZQueryLoading};
