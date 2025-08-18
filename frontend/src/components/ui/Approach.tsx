interface Props {
    children: React.ReactNode
}

const Approach = ({ children }: Props) => {
    return (
        <div className="bg-gray-100 rounded-lg shadow-sm py-3 px-4 text-gray-800 text-center max-w-sm w-full">
            {children}
        </div>
    )
}

export default Approach
