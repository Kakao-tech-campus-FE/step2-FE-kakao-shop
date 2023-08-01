import Loader from './loader';

export default function GlobalLoader() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Loader />
    </div>
  );
}
