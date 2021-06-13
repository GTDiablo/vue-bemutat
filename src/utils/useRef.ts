import { ref, Ref, UnwrapRef } from 'vue';

export function useRef<T>(defaultValue: T): [Ref<UnwrapRef<T>>, (newValue: UnwrapRef<T>) => void] {
    const valueRef = ref<T>(defaultValue);

    const setValue = (newValue: UnwrapRef<T>): void => {
        valueRef.value = newValue;
    }

    return [valueRef, setValue];
}

// const [name, setName] = useRef<string>('');
// setName('11110');
