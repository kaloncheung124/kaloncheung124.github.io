import { useState, useCallback } from 'react';

const descriptors = ['beautiful', 'imaginative', 'useful'];

export const Introduction = () => {
    const [descriptorIndex, setDescriptorIndex] = useState(0);
    const descriptor = descriptors[descriptorIndex];

    const handleChangeDescriptor = useCallback(() => {
        setDescriptorIndex(currentDescriptorIndex => (currentDescriptorIndex + 1) % descriptors.length);
    }, [setDescriptorIndex]);

    return (
        <div className="App-intro">
            <div className="App-name">Hi, I'm Kalon Cheung.</div>
            <div className="App-subtitle">
                <p>
                    I build 
                    <span className="description-highlight" onClick={handleChangeDescriptor}> {descriptor} </span>
                    things for the web.
                </p>
            </div>
        </div>
    );
};
