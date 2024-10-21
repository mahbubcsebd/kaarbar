'use client';

import { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import HomePreLoader from '../HomePreLoader';

// Placeholder components
const Loading = () => <div>Loading...</div>;
const ErrorComponent = () => <div>Error loading theme component.</div>;

function Template({ template }) {
    const [Component, setComponent] = useState(null);
    const [error, setError] = useState(false);
    const [cachedTemplate, setCachedTemplate] = useState(null);

    const fetchAndRender = useCallback(
        async (newTemplate) => {
            if (newTemplate !== cachedTemplate) {
                try {
                    const Component = lazy(() => import(`./${newTemplate}`));
                    setComponent(Component);
                    setCachedTemplate(newTemplate);
                } catch (error) {
                    setError(true);
                }
            }
        },
        [cachedTemplate]
    );

    useEffect(() => {
        fetchAndRender(template);
    }, [template, fetchAndRender]);

    if (error) {
        return <ErrorComponent />;
    }

    return (
        <div>
            {Component && (
                <Suspense fallback={<HomePreLoader />}>
                    <Component />
                </Suspense>
            )}
        </div>
    );
}

export default Template;
