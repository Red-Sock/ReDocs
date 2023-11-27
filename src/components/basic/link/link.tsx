
export function LinkWrapper(props: {href: string, name: string}) {
    return (
        <a href={props.href}>
            {props.name}
        </a>
    )
}
