
export const Icon = ({ name }) => (
    <svg className="icon">
        <use xlinkHref={`#icon-${name}`} />
    </svg>
);