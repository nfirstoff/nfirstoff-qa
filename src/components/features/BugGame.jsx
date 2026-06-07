import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AlertTriangle, CheckCircle2, RefreshCw } from "lucide-react"
import SectionTitle from "../ui/SectionTitle"
import Badge from "../ui/Badge"
import Button from "../ui/Button"
import { bugGames } from "../../data/bugGames"

export default function BugGame() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const game = bugGames[currentIndex]
  const total = bugGames.length

  const handleAnswer = (optionId) => {
    if (showResult) return
    setSelectedAnswer(optionId)
    setShowResult(true)
    if (optionId === game.correctAnswer) {
      setScore((s) => s + 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex((i) => i + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setFinished(true)
    }
  }

  const handleRetry = () => {
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setFinished(false)
  }

  if (finished) {
    return (
      <section id="bug-game" className="relative px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <SectionTitle
            title="Can You Spot the Bug?"
            subtitle="Examples of issues that can impact business and financial stability"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-xl border border-gray-200 bg-white p-10 shadow-sm"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-50">
              <CheckCircle2 className="h-8 w-8 text-brand-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              You scored {score} / {total}
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              {score === total
                ? "Excellent! You have a sharp eye for financial system issues."
                : "Good effort! QA engineers catch these issues every day."}
            </p>
            <div className="mt-6">
              <Button onClick={handleRetry} variant="secondary">
                <RefreshCw className="h-4 w-4" />
                Try Again
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="bug-game" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          title="Can You Spot the Bug?"
          subtitle="Examples of issues that can impact business and financial stability"
        />

        <div className="mb-6 flex items-center justify-between">
          <span className="text-xs font-medium text-gray-500">
            Case {currentIndex + 1} of {total}
          </span>
          <div className="flex gap-1.5">
            {bugGames.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 w-6 rounded-full transition-colors ${
                  i < currentIndex ? "bg-brand-500" : i === currentIndex ? "bg-brand-300" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="border-b border-gray-200 bg-gradient-to-r from-brand-50 to-blue-50 px-6 py-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-gray-900">{game.title}</h3>
                  <Badge variant={game.severity === "Critical" ? "critical" : game.severity === "High" ? "high" : "medium"}>
                    {game.severity}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-6 rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <div className="grid gap-2 sm:grid-cols-2">
                    {game.screen.fields.map((field) => (
                      <div key={field.label} className="flex items-center justify-between gap-2">
                        <span className="text-xs text-gray-500">{field.label}</span>
                        <span className={`text-sm font-mono font-medium ${
                          field.highlight ? "text-red-600 bg-red-50 px-1.5 py-0.5 rounded" : "text-gray-900"
                        }`}>
                          {field.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mb-4 text-sm font-medium text-gray-700">{game.question}</p>

                <div className="space-y-2">
                  {game.options.map((option) => {
                    const isCorrect = option.id === game.correctAnswer
                    const isSelected = selectedAnswer === option.id
                    let borderClass = "border-gray-200 hover:border-gray-300"
                    if (showResult) {
                      if (isCorrect) borderClass = "border-emerald-400 bg-emerald-50"
                      else if (isSelected) borderClass = "border-red-400 bg-red-50"
                      else borderClass = "border-gray-100 opacity-60"
                    } else if (isSelected) {
                      borderClass = "border-brand-400 bg-brand-50"
                    }

                    return (
                      <button
                        key={option.id}
                        onClick={() => handleAnswer(option.id)}
                        disabled={showResult}
                        className={`flex w-full items-center gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-all duration-200 ${borderClass}`}
                      >
                        <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs font-medium ${
                          showResult && isCorrect
                            ? "border-emerald-500 bg-emerald-500 text-white"
                            : showResult && isSelected && !isCorrect
                            ? "border-red-500 bg-red-500 text-white"
                            : "border-gray-300 text-gray-500"
                        }`}>
                          {showResult && isCorrect ? "✓" : showResult && isSelected && !isCorrect ? "✗" : option.id.toUpperCase()}
                        </span>
                        <span className={`${showResult && isCorrect ? "text-emerald-800 font-medium" : showResult && isSelected && !isCorrect ? "text-red-800" : "text-gray-700"}`}>
                          {option.text}
                        </span>
                      </button>
                    )
                  })}
                </div>

                <AnimatePresence>
                  {showResult && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 space-y-3">
                        <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-emerald-800">Bug Found</p>
                              <p className="mt-1 text-xs text-emerald-700">{game.explanation}</p>
                            </div>
                          </div>
                        </div>

                        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                          <div className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" />
                            <div>
                              <p className="text-sm font-medium text-amber-800">Why It Matters</p>
                              <p className="mt-1 text-xs text-amber-700">{game.whyItMatters}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <Button onClick={handleNext} variant="primary">
                            {currentIndex < total - 1 ? "Next Case" : "See Results"}
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
