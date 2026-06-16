import { APP_NAME } from "../utils/constants";

export function Footer() {
	return (
		<footer className="mt-auto border-surface-800 border-t">
			<div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
				<p className="text-center text-sm text-surface-500">
					&copy; {new Date().getFullYear()} {APP_NAME}. Built for learning SQL.
				</p>
			</div>
		</footer>
	);
}
