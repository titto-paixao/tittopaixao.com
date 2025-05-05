import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  it('renders Next.js logo', () => {
    render(<Home />);
    const logo = screen.getByAltText('Next.js logo');
    expect(logo).toBeInTheDocument();
  });

  it('has a link to deploy', () => {
    render(<Home />);
    const link = screen.getByRole('link', { name: /Deploy now/i });
    expect(link).toHaveAttribute('href', expect.stringContaining('vercel.com'));
  });

  it('shows the "Read our docs" link', () => {
    render(<Home />);
    const docsLink = screen.getByRole('link', { name: /Read our docs/i });
    expect(docsLink).toBeInTheDocument();
  });
});