import Image from "next/image";
import mark from "@/public/central-logo-mark.png";

const C = 220; // centre of the 440 viewBox
const R_TEXT = 174; // radius the lettering rides on

/**
 * The college mark set into a seal — rings, and the name and founding year
 * carried around it.
 *
 * The mark on its own would only repeat the navbar a little larger. Ringed and
 * lettered it becomes the thing a college actually stamps on a certificate,
 * which is what the empty half of the hero was asking for.
 */
export default function Crest({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-square w-full max-w-[21rem] xl:max-w-[25rem] ${className}`}>
      <svg viewBox="0 0 440 440" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          {/* left to right over the top */}
          <path id="crest-top" d={`M ${C - R_TEXT},${C} a ${R_TEXT},${R_TEXT} 0 0,1 ${R_TEXT * 2},0`} fill="none" />
          {/* left to right under the bottom — sweep 0 keeps the letters upright */}
          <path id="crest-bottom" d={`M ${C - R_TEXT},${C} a ${R_TEXT},${R_TEXT} 0 0,0 ${R_TEXT * 2},0`} fill="none" />
        </defs>

        <circle cx={C} cy={C} r="214" fill="none" stroke="#faa61a" strokeOpacity="0.18" strokeWidth="1" />
        <circle cx={C} cy={C} r="200" fill="none" stroke="#faa61a" strokeOpacity="0.38" strokeWidth="1.5" />
        <circle
          cx={C} cy={C} r="150"
          fill="none" stroke="#d6e2f4" strokeOpacity="0.16" strokeWidth="1"
          strokeDasharray="2 7" strokeLinecap="round"
        />

        <g
          fill="#fcbc4d"
          fillOpacity="0.75"
          style={{ fontFamily: "var(--font-plex-mono), ui-monospace, monospace", fontSize: 16, letterSpacing: "0.34em" }}
        >
          <text dy="5">
            <textPath href="#crest-top" startOffset="50%" textAnchor="middle">
              CENTRAL COLLEGE
            </textPath>
          </text>
          <text dy="-6">
            <textPath href="#crest-bottom" startOffset="50%" textAnchor="middle">
              MULTAN · EST. 1992
            </textPath>
          </text>
        </g>

        {/* the two words are separated by a mark on each side, not by a gap */}
        {[-1, 1].map((side) => (
          <g key={side} transform={`translate(${C + side * R_TEXT} ${C}) rotate(45)`}>
            <rect x="-4" y="-4" width="8" height="8" fill="#faa61a" fillOpacity="0.7" />
          </g>
        ))}
      </svg>

      <Image
        src={mark}
        alt="Central College Multan"
        priority
        sizes="(min-width: 1280px) 25rem, (min-width: 1024px) 21rem, 0px"
        className="absolute left-1/2 top-1/2 w-[48%] -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
