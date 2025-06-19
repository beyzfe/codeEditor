interface Props {
  code: string;
}

export default function Preview({ code }: Props) {
  const htmlContent = `
    <html>
      <body>
        <div> ${code}</div>
      </body>
    </html>
  `;

  return (
    <div className="w-full h-full border p-2">
      <h2 className="font-bold mb-2">Kodun Çıktısı</h2>
      <iframe
        srcDoc={htmlContent}
        sandbox="allow-scripts"
        title="code-preview"
        width="100%"
        height="100%"
        className="bg-white border rounded"
      />
    </div>
  );
}
