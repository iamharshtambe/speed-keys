import TextInput from './TextInput';

export default function TypingArea() {
  return (
    <div className="w-full space-y-4 rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-5 font-mono font-light">
      <div>Here goes the text to be typed</div>

      <div>
        <TextInput />
      </div>
    </div>
  );
}
