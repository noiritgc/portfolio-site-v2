import type { ReactNode } from 'react';

type DoodleProps = { className?: string };

function Doodle({ className = '', viewBox = '0 0 100 100', children }: DoodleProps & { viewBox?: string; children: ReactNode }) {
  return (
    <svg className={`doodle ${className}`} viewBox={viewBox} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

// Lines stretch to their container, so strokes keep a fixed width however wide the line gets.
export function Rule({ className = '' }: DoodleProps) {
  return (
    <svg className={`rule ${className}`} viewBox="0 0 1000 12" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeLinecap="round" aria-hidden="true">
      <path vectorEffect="non-scaling-stroke" d="M3 6C120 2 210 9 340 6S560 3 690 7 880 4 997 6" />
    </svg>
  );
}

// Two passes that don't quite line up, the way a box gets drawn by hand.
export function RoughBox({ className = '' }: DoodleProps) {
  return (
    <svg className={`rough-box ${className}`} viewBox="0 0 400 300" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeLinecap="round" aria-hidden="true">
      <path vectorEffect="non-scaling-stroke" d="M-2 7C90 3 250 9 404 4 397 90 401 200 396 298 280 293 110 299 4 295 7 200 1 90 6-4" />
      <path vectorEffect="non-scaling-stroke" opacity=".7" d="M5 3C130 8 290 1 398 7 402 110 394 210 399 293 260 298 120 292 2 298 3 180 8 80 3 6" />
    </svg>
  );
}

// Colouring-in: separate diagonal strokes, translucent so the wax darkens where they overlap.
export function Scribble({ className = '' }: DoodleProps) {
  const strokes: { d: string; opacity: number }[] = [];
  const slant = 150;
  let seed = 7;
  const random = (range: number) => {
    seed = (seed * 1103 + 12345) % 65536;
    return seed % range;
  };

  for (let c = -slant; c < 400; c += 6 + random(6)) {
    const startX = Math.max(c, 0);
    const endX = Math.min(c + slant, 400);
    const y = (x: number) => 300 - (x - c) * (300 / slant);
    const x1 = startX - random(9);
    const x2 = endX + random(9);
    const y1 = Math.round(y(startX)) + random(9);
    const y2 = Math.round(y(endX)) - random(9);
    const bendX = Math.round((x1 + x2) / 2) + random(13) - 6;
    const bendY = Math.round((y1 + y2) / 2) + random(13) - 6;
    strokes.push({ d: `M${x1} ${y1}Q${bendX} ${bendY} ${x2} ${y2}`, opacity: 0.5 + random(4) / 10 });
  }

  return (
    <svg className={`scribble ${className}`} viewBox="0 0 400 300" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeLinecap="round" aria-hidden="true">
      {strokes.map((stroke) => <path key={stroke.d} vectorEffect="non-scaling-stroke" opacity={stroke.opacity} d={stroke.d} />)}
    </svg>
  );
}

export function ArrowOut({ className }: DoodleProps) {
  return <Doodle className={className}><path strokeWidth="11" d="M16 84C36 62 58 40 82 18M42 16C56 20 72 18 84 16 84 30 82 46 86 60" /></Doodle>;
}

export function Mail({ className }: DoodleProps) {
  return <Doodle className={className}><path strokeWidth="8" d="M8 24C36 21 66 26 92 22 94 42 90 62 93 78 64 76 34 80 7 77 10 58 6 40 8 24ZM9 26C24 40 38 50 50 58 64 48 78 38 91 24" /></Doodle>;
}

export function GitHubMark({ className }: DoodleProps) {
  return <Doodle className={className}><path strokeWidth="8" d="M36 92V76C20 80 16 70 12 64M64 92V72C64 66 62 62 58 60 74 58 86 50 86 34 86 28 84 22 80 18 82 12 82 8 80 4 74 4 68 8 62 12 54 10 46 10 38 12 32 8 26 4 20 4 18 8 18 12 20 18 16 22 14 28 14 34 14 50 26 58 42 60 38 62 36 66 36 72" /></Doodle>;
}

export function LinkedInMark({ className }: DoodleProps) {
  return <Doodle className={className}><path strokeWidth="9" d="M14 40C14 54 16 70 14 88M14 18V20M38 88C38 72 40 54 38 40M38 56C46 42 66 36 76 46 86 54 84 74 86 88" /></Doodle>;
}

// A kid's-drawing self portrait, waving, inside a coloured ring.
export function Portrait({ className = '' }: DoodleProps) {
  return (
    <svg className={`drawing ${className}`} viewBox="0 0 400 400" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path stroke="#2f8f5b" strokeWidth="10" d="M204 14C308 10 390 96 388 200 386 308 300 390 198 386 90 384 12 300 14 198 16 94 100 16 216 14" />
      <path stroke="#2f8f5b" strokeWidth="6" opacity=".6" d="M190 22C296 12 382 110 378 206 372 306 288 382 192 376 94 368 24 292 26 192 30 100 106 26 200 22" />
      <path stroke="#1f5a9c" strokeWidth="13" d="M150 244C176 230 226 230 252 244L268 340 134 340ZM146 262 256 256 140 280 262 274 138 298 266 292 136 316 266 310 138 332 266 328" />
      <path stroke="#1f5a9c" strokeWidth="13" d="M250 250C276 238 298 212 316 176M152 250C130 268 116 290 106 318" />
      <path stroke="#c9884f" strokeWidth="11" d="M312 160C306 150 306 142 308 134M322 160C322 148 324 140 328 132M332 168C338 158 342 152 348 146M304 172 330 176" />
      <path stroke="#c9884f" strokeWidth="11" d="M190 208 192 234M212 208 212 234" />
      <path stroke="#c9884f" strokeWidth="8" d="M200 92C166 92 142 118 144 150 146 184 172 208 202 206 234 204 258 180 256 148 254 116 232 92 196 92" />
      <path stroke="#26211c" strokeWidth="13" d="M140 138C146 96 176 76 208 78 240 80 262 104 262 138M152 122 172 92 178 124 200 86 208 120 230 90 236 124 252 106" />
      <path stroke="#26211c" strokeWidth="11" d="M178 148h2M224 148h2" />
      <path stroke="#d9342b" strokeWidth="7" d="M174 174C186 188 216 188 230 172" />
    </svg>
  );
}

export function TuningDrawing({ className = '' }: DoodleProps) {
  return (
    <svg className={`drawing ${className}`} viewBox="0 0 640 360" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path stroke="#1f5a9c" strokeWidth="11" d="M320 72C224 70 148 148 150 240M320 72C414 70 490 146 490 240" />
      <path stroke="#1f5a9c" strokeWidth="9" d="M198 128 214 146M320 72V94M442 128 426 146M150 240H176M490 240H464" />
      <path stroke="#d9342b" strokeWidth="13" d="M320 262C338 212 354 172 376 132" />
      <path stroke="#d9342b" strokeWidth="16" d="M300 262C310 248 334 246 344 258 350 272 330 284 314 282 304 280 298 272 300 262Z" />
      <path stroke="#7a4bb0" strokeWidth="10" d="M92 118V54C106 52 118 48 130 44V106M92 118C86 106 66 110 66 122S90 132 92 118ZM130 106C124 94 104 98 104 110S128 120 130 106Z" />
    </svg>
  );
}

export function NewsDrawing({ className = '' }: DoodleProps) {
  return (
    <svg className={`drawing ${className}`} viewBox="0 0 640 360" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path stroke="#1f5a9c" strokeWidth="10" d="M176 48C276 44 372 52 464 46 470 136 462 226 468 314 372 310 272 318 170 312 176 222 168 136 176 48Z" />
      <path stroke="#d9342b" strokeWidth="17" d="M206 92C280 88 356 94 432 88" />
      <path stroke="#f2c81e" strokeWidth="11" d="M208 136 300 134 298 214 210 216 208 150 296 150 212 168 296 166 214 186 294 184 216 202 290 200" />
      <path stroke="#1f5a9c" strokeWidth="8" d="M332 138H432M332 170 428 168M332 202H434M208 256C280 252 360 258 432 254M208 284 390 282" />
    </svg>
  );
}

// Me on a dock with a rod out, bobber in the water and a fish underneath.
export function FishingDrawing({ className = '' }: DoodleProps) {
  return (
    <svg className={`drawing ${className}`} viewBox="0 0 640 400" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path stroke="#1f5a9c" strokeWidth="8" opacity=".75" d="M296 322C326 312 356 332 386 322S446 312 476 322 536 332 566 322 606 314 626 320M310 350C340 340 370 360 400 350S460 340 490 350 550 360 580 350M330 378C360 368 390 388 420 378S480 368 510 378 570 388 600 378" />
      <path stroke="#f2c81e" strokeWidth="9" d="M392 362C412 342 448 342 466 360 448 378 412 378 392 362ZM466 360 488 344 486 378Z" />
      <path stroke="#26211c" strokeWidth="7" d="M414 356h2" />
      <path stroke="#8a5a34" strokeWidth="11" d="M50 318C130 314 210 320 300 316M72 320V376M276 318V376M54 336C130 332 210 338 296 334" />
      <path stroke="#26211c" strokeWidth="12" d="M152 268 148 312M196 268 200 312M136 314 156 314M192 314 212 314" />
      <path stroke="#1f5a9c" strokeWidth="12" d="M140 186C156 178 190 178 206 186L214 266 132 266ZM138 206 208 202M136 226 210 222M134 246 212 242" />
      <path stroke="#1f5a9c" strokeWidth="12" d="M204 194C220 204 234 214 246 226M144 196C176 214 206 226 236 238" />
      <path stroke="#c9884f" strokeWidth="11" d="M248 228 252 232M238 240 242 244M166 170 166 184M178 170 178 184" />
      <path stroke="#c9884f" strokeWidth="8" d="M170 90C146 90 128 108 130 132 132 156 150 172 172 170 196 168 212 150 210 126 208 104 192 90 166 90" />
      <path stroke="#26211c" strokeWidth="12" d="M128 122C134 92 156 80 176 82 198 84 212 100 212 122M138 110 152 88 158 108 172 84 180 106 196 88 202 110" />
      <path stroke="#26211c" strokeWidth="10" d="M156 128h2M186 128h2" />
      <path stroke="#d9342b" strokeWidth="6" d="M158 148C166 156 180 156 188 148" />
      <path stroke="#8a5a34" strokeWidth="9" d="M226 246C310 180 396 116 482 58" />
      <path stroke="#26211c" strokeWidth="3" d="M482 58C494 144 502 236 508 308" />
      <path stroke="#d9342b" strokeWidth="12" d="M500 314C500 304 516 304 516 314 516 326 500 326 500 314Z" />
    </svg>
  );
}

// A clarinet, black wood and silver keys, with a couple of notes coming out of the bell.
export function ClarinetDrawing({ className = '' }: DoodleProps) {
  return (
    <svg className={`drawing ${className}`} viewBox="0 0 640 300" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path stroke="#26211c" strokeWidth="9" d="M60 150C80 144 104 141 128 140L130 164C104 162 80 160 62 156Z" />
      <path stroke="#c9884f" strokeWidth="6" d="M70 160C90 164 110 166 126 166" />
      <path stroke="#1f5a9c" strokeWidth="8" d="M104 138 106 166M114 137 116 167" />
      <path stroke="#26211c" strokeWidth="11" d="M130 136C146 134 162 134 176 136L176 166C162 168 146 168 130 166Z" />
      <path stroke="#26211c" strokeWidth="10" d="M176 140C280 138 380 141 468 139L470 163C380 165 280 162 176 164Z" />
      <path stroke="#26211c" strokeWidth="7" opacity=".7" d="M186 146 462 144M184 152 464 151M186 158 462 157" />
      <path stroke="#26211c" strokeWidth="11" d="M468 139C500 134 532 120 572 106 580 150 580 156 574 196 534 182 500 168 470 163" />
      <path stroke="#26211c" strokeWidth="7" opacity=".7" d="M486 144 562 120M486 152 568 150M486 160 562 182" />
      <path stroke="#1f5a9c" strokeWidth="7" d="M150 134V168M174 134V168M300 136V168M314 136V168" />
      <path stroke="#1f5a9c" strokeWidth="7" d="M206 130C214 126 222 130 220 138M244 130C252 126 260 130 258 138M278 130C286 126 294 130 292 138M340 130C348 126 356 130 354 138M378 130C386 126 394 130 392 138M418 130C426 126 434 130 432 138" />
      <path stroke="#1f5a9c" strokeWidth="6" d="M200 124C280 120 360 122 440 120M230 176C300 180 380 178 450 176" />
      <path stroke="#d9342b" strokeWidth="9" d="M560 82V40C570 38 580 34 588 30V70M560 82C556 74 542 76 542 84S558 92 560 82ZM588 70C584 62 570 64 570 72S586 80 588 70Z" />
      <path stroke="#f2c81e" strokeWidth="9" d="M604 116V88M604 116C600 108 588 110 588 118S602 126 604 116ZM604 88C612 92 618 98 618 106" />
    </svg>
  );
}

// A fish on the line, pulled up out of the water.
export function CatchDrawing({ className = '' }: DoodleProps) {
  return (
    <svg className={`drawing ${className}`} viewBox="0 0 640 300" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path stroke="#8a5a34" strokeWidth="10" d="M60 28C130 34 200 44 268 58" />
      <path stroke="#26211c" strokeWidth="3" d="M268 58C292 82 312 108 330 128" />
      <path stroke="#2f8f5b" strokeWidth="9" d="M330 128C364 98 440 124 472 178 432 202 362 184 330 128ZM472 178 514 156 506 214Z" />
      <path stroke="#2f8f5b" strokeWidth="7" opacity=".7" d="M362 128 392 176M392 126 420 182M420 140 444 186" />
      <path stroke="#26211c" strokeWidth="8" d="M352 132h2" />
      <path stroke="#1f5a9c" strokeWidth="8" opacity=".75" d="M120 250C160 238 200 260 240 250S320 238 360 250 440 262 480 250 560 240 600 250M160 280C200 270 240 288 280 280S360 270 400 280 480 290 520 280" />
      <path stroke="#1f5a9c" strokeWidth="8" d="M488 230 496 222M522 226 530 214M540 240 552 236M466 222 470 212" />
    </svg>
  );
}

// A football coloured orange with black tiger stripes.
export function FootballDrawing({ className = '' }: DoodleProps) {
  return (
    <svg className={`drawing ${className}`} viewBox="0 0 640 300" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path stroke="#e8641f" strokeWidth="13" opacity=".9" d="M248 106 392 104M214 124 426 122M198 142 442 140M198 160 442 158M214 178 426 178M248 196 392 196" />
      <path stroke="#26211c" strokeWidth="11" d="M180 152C220 78 420 74 460 150 420 226 222 228 180 152Z" />
      <path stroke="#26211c" strokeWidth="12" d="M236 104C250 124 244 140 262 150 246 164 252 182 238 200M402 104C388 124 394 140 376 150 392 164 386 182 400 200" />
      <path stroke="#26211c" strokeWidth="8" d="M270 150C300 148 340 148 370 150M290 136V164M310 136V164M330 136V164M350 136V164" />
    </svg>
  );
}

// The Steady Hands drawing: the magnet pen over its board, with the five sensors, coloured in.
export function DeskDrawing({ className = '' }: DoodleProps) {
  return (
    <svg className={`drawing ${className}`} viewBox="0 0 640 360" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path stroke="#1f5a9c" strokeWidth="9" d="M120 252C230 246 410 256 520 250 530 262 510 276 500 278 370 282 240 276 112 280 100 272 108 258 120 252Z" />
      <path stroke="#1f5a9c" strokeWidth="7" opacity=".75" d="M122 262 510 258 500 268 118 272" />
      <path stroke="#f2c81e" strokeWidth="12" d="M170 265h7M250 265h7M330 265h7M410 265h7M478 264h7" />
      <path stroke="#d9342b" strokeWidth="9" d="M430 62C400 110 362 170 330 226 322 238 316 244 312 246 312 238 314 230 318 218 350 160 384 104 414 50 422 44 434 52 430 62Z" />
      <path stroke="#d9342b" strokeWidth="7" opacity=".8" d="M420 58 324 226 332 216 424 66 412 76 328 222" />
    </svg>
  );
}
