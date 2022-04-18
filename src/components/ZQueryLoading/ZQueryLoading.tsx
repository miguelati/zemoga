import React, {FC, useMemo} from 'react';
import {Spinner, View} from 'native-base';
import {UseQueryResult} from 'react-query';

export interface ZQueryLoadingProps {
  requests?: UseQueryResult[];
  request?: UseQueryResult;
  big?: boolean;
  children: JSX.Element;
}

const ZQueryLoading: FC<ZQueryLoadingProps> = ({
  requests,
  request,
  big = true,
  children,
}) => {
  const waiters = useMemo(
    () => (request ? [request] : requests),
    [request, requests],
  );

  const loading = useMemo(() => waiters?.some(req => req.isLoading), [waiters]);

  if (loading) {
    return (
      <View flex={1} justifyContent="center" alignItems="center">
        <Spinner color="green.700" size={big ? 'lg' : 'sm'} />
      </View>
    );
  }

  return children;
};

export {ZQueryLoading};
