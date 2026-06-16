interface TableProps {
	columns: string[];
	rows: Record<string, unknown>[];
}

export function Table({ columns, rows }: TableProps) {
	return (
		<div className="overflow-x-auto rounded-lg border border-surface-800">
			<table className="w-full text-sm">
				<thead>
					<tr className="border-surface-800 border-b bg-surface-900">
						{columns.map((col) => (
							<th
								key={col}
								className="px-4 py-2 text-left font-medium text-surface-400"
							>
								{col}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((row, i) => (
						<tr
							// biome-ignore lint/suspicious/noArrayIndexKey: using index for generic SQL query results row
							key={i}
							className="border-surface-800/50 border-b transition-colors last:border-0 hover:bg-surface-900/50"
						>
							{columns.map((col) => {
								const val = row[col];
								let displayVal: string;
								if (val === null || val === undefined) {
									displayVal = "NULL";
								} else if (typeof val === "object") {
									try {
										displayVal = JSON.stringify(val);
									} catch {
										displayVal = String(val);
									}
								} else {
									displayVal = String(val);
								}
								return (
									<td
										key={col}
										className="px-4 py-2 font-mono text-surface-200"
									>
										{displayVal}
									</td>
								);
							})}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
