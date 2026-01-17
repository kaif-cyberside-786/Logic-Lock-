# 🔐 Logic Lock

A visually stunning browser-based puzzle game that challenges your logic and reasoning skills with smooth animations and an engaging interface.

## ✨ Features

### 🎮 Gameplay
- **Logic Puzzles**: Sequence patterns, odd-one-out, and letter-to-number challenges
- **Progressive Difficulty**: 3 levels of increasing complexity
- **Hint System**: Get subtle clues when stuck
- **Keyboard Support**: Press Enter to submit answers quickly

### 🎨 Engaging Interface
- **Animated Background**: Dynamic gradient shifts for visual appeal
- **Shimmer Effects**: Premium shimmer animation on the game container
- **Progress Tracking**: Visual progress bar and level indicators
- **Interactive Feedback**:
  - ✅ Correct answers: Bouncing animation with green glow
  - ❌ Wrong answers: Shaking animation with red glow
  - 🎉 Completion: Celebratory scaling animation
- **Modern UI**: Dark theme with gradients, shadows, and hover effects
- **Responsive Design**: Adapts to different screen sizes

### 🎯 User Experience
- **Smooth Transitions**: All interactions have fluid CSS animations
- **Visual Feedback**: Immediate response to user actions
- **Accessibility**: High contrast colors and focus indicators

## 🚀 How to Play

1. **Start**: Click "🚀 Start Game" on the landing page
2. **Solve**: Read the puzzle and enter your answer
3. **Submit**: Click "🔓 Unlock" or press Enter
4. **Progress**: Watch your progress bar fill as you advance
5. **Hints**: Use the "💡 Hint" button if you need help
6. **Complete**: Finish all levels to see the celebration!

## 🛠 Tech Stack

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with animations and gradients
- **Vanilla JavaScript**: Game logic and DOM manipulation

## 📁 Project Structure

```
Logic-Lock/
├── index.html      # Landing page with animated title
├── game.html       # Main game interface
├── style.css       # Modern CSS with animations
├── game.js         # Game logic and interactions
└── puzzles.js      # Puzzle data and hints
```

## 🎨 Customization

### Adding New Puzzles
Edit `puzzles.js` to add new puzzle objects:

```javascript
{
  question: "Your puzzle question here",
  answer: "correct_answer",
  hint: "Helpful hint for players"
}
```

### Styling Changes
Modify `style.css` to customize colors, animations, or layout. Key variables:
- Background gradients: `--bg-gradient`
- Accent colors: `--accent-color`
- Animation durations: `--anim-duration`

## 🌟 Future Enhancements

- [ ] Sound effects for feedback
- [ ] Score system with time bonuses
- [ ] More puzzle types (riddles, math problems)
- [ ] Leaderboard functionality
- [ ] Mobile app version
