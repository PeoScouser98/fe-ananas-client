'use client';

declare type TComponentWithProps = Array<[React.ElementType, {}?]>;

/**
 * Build an providers tree as an component
 */
const buildProviders = (componentsWithProps: TComponentWithProps) => {
	const InitialComponent = (props: React.PropsWithChildren) => <>{props.children}</>;

	return componentsWithProps.reduce((AccumulatedComponent, [Provider, props = {}]) => {
		return ({ children }) => {
			return (
				<AccumulatedComponent>
					<Provider {...props}>{children}</Provider>
				</AccumulatedComponent>
			);
		};
	}, InitialComponent);
};

export default buildProviders;
