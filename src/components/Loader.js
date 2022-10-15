export default function Loader() {
  return (
    <svg
      style={{
        margin: '0 auto', display: 'block', shapeRendering: 'auto',
      }}
      width="150px"
      height="150px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle cx="50" cy="50" fill="none" stroke="#604FFF" strokeWidth="6" r="32" strokeDasharray="150.79644737231007 52.26548245743669">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" />
      </circle>
    </svg>
  );
}
