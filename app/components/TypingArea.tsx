import TextInput from "./TextInput";

export default function TypingArea() {
  return (
    <div className="space-y-4 rounded-md border border-gray-300 px-2 py-5 font-mono text-xl">
      <div>
        <p>Test goes here...</p>
      </div>

      <div>
        <TextInput />
      </div>
    </div>
  );
}
