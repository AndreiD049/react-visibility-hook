# react-visibility-hook
Simple react hook used to detect page visibility changes

# Install

```bash
npm i react-visibility-hook
```

# Usage

```ts
const Component: FC = () => {
    const visibility = useVisibility();

    useEffect(() => {
        // Run code that needs to be aware of page visibility
        console.log(visibility.visible) // true | false depending on visibility
        console.log(visibility.lastSeen) // Date when page was last time visible
        console log(visibility.sinceLastVisible()) // number of milliseconds since page was last time visible
    }, [visibility]);
}
```
