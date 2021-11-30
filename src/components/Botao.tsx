interface BotaoProps {
  cor?: 'green' | 'blue' | 'red' | 'yellow' | 'gray'
  className?: string
  children: any
  onClick?: () => void
}

export default function Botao(props) {
  return (
    <button onClick={props.onClick} className={`
      bg-gradient-to-r from-blue-400 to-blue-700
      text-white font-bold px-4 py-2 rounded-md
      ${props.className}
    `}>
      {props.children}
    </button>
  );
}