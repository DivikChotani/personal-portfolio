export default function Layout({ children }) {
  return (
    <>
      {/* Page Content */}
      <main className="main-content">
        {children}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}