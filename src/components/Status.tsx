import '../css/status.css';

type StatusProp = {
  status: string;
  reset: () => void;
};

export default function Status({ status, reset }: StatusProp) {
  return (
    <div className="play_again">
      <h2 className="status">{status == 'draw' ? status : `you ${status}`}</h2>
      <button className="play_button" onClick={reset}>
        PLAY AGAIN
      </button>
    </div>
  );
}
