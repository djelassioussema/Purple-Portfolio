import React from 'react';
import { Copy } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      icon: '🔷',
      title: 'Advanced RAG Pipeline with Vector Search & LLM Orchestration',
      description: 'Production-grade Retrieval-Augmented Generation system with semantic chunking, hybrid search, and multi-agent workflows',
      tags: ['RAG', 'Vector DB', 'LangChain', 'OpenAI', 'Pinecone', 'Redis'],
      codePreview: `// Advanced RAG Pipeline with Multi-Agent Orchestration
import { OpenAI } from "openai";
import { PineconeStore } from "@langchain/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { createClient } from "redis";
import { z } from "zod";

interface RAGConfig {
  vectorStore: PineconeStore;
  llm: OpenAI;
  cache: ReturnType<typeof createClient>;
  embeddingModel: OpenAIEmbeddings;
}

class AdvancedRAGPipeline {
  private config: RAGConfig;
  private semanticRouter: SemanticRouter;
  private queryRewriter: QueryRewriter;

  constructor(config: RAGConfig) {
    this.config = config;
    this.semanticRouter = new SemanticRouter(config.embeddingModel);
    this.queryRewriter = new QueryRewriter(config.llm);
  }

  async processQuery(query: string, context?: AgentContext): Promise<RAGResponse> {
    // Multi-step query processing with semantic routing
    const routingResult = await this.semanticRouter.route(query);
    const rewrittenQueries = await this.queryRewriter.expandQuery(query, routingResult);
    
    // Parallel retrieval with fusion scoring
    const retrievalPromises = rewrittenQueries.map(async (q) => {
      const cacheKey = await this.generateCacheKey(q, context);
      const cached = await this.config.cache.get(cacheKey);
      if (cached) return JSON.parse(cached);
      
      const results = await this.config.vectorStore.similaritySearch(q, 10);
      await this.config.cache.set(cacheKey, JSON.stringify(results), 'EX', 3600);
      return results;
    });
    
    const allResults = await Promise.all(retrievalPromises);
    const fusedResults = this.fusionRanking(allResults);
    
    // Generate response with context
    const response = await this.generateResponse(query, fusedResults, context);
    return response;
  }

  private fusionRanking(results: any[][]): any[] {
    // Implement reciprocal rank fusion
    const scoreMap = new Map();
    
    results.forEach((resultSet, setIndex) => {
      resultSet.forEach((doc, rank) => {
        const key = doc.metadata.id;
        const score = 1 / (rank + 60);
        scoreMap.set(key, (scoreMap.get(key) || 0) + score);
      });
    });
    
    return Array.from(scoreMap.entries())
      .sort(([,a], [,b]) => b - a)
      .slice(0, 5)
      .map(([id]) => results.flat().find(doc => doc.metadata.id === id));
  }
}`
    },
    {
      icon: '🐍',
      title: 'Distributed ML Training with Kubernetes & Ray',
      description: 'Scalable machine learning pipeline with distributed training, hyperparameter optimization, and model serving',
      tags: ['Python', 'Kubernetes', 'Ray', 'MLflow', 'Docker']
    },
    {
      icon: '⚡',
      title: 'Event-Driven Microservices with CQRS & Event Sourcing',
      description: 'Scalable microservices architecture using CQRS, Event Sourcing, and distributed event streaming with Kafka',
      tags: ['Node.js', 'Kafka', 'MongoDB', 'Redis', 'Docker']
    },
    {
      icon: '🖥️',
      title: 'GPU-Accelerated Computer Vision Pipeline',
      description: 'High-performance computer vision system with CUDA acceleration, real-time object detection, and distributed processing',
      tags: ['Python', 'CUDA', 'OpenCV', 'TensorRT', 'FastAPI']
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left panel - Project cards */}
          <div className="flex flex-col">
            <div className="grid grid-cols-1 gap-4">
              {projects.slice(1).map((project, index) => (
                <div
                  key={index}
                  className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl flex-shrink-0">{project.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel - Featured project with code editor */}
          <div>
            <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 flex flex-col h-96">
              {/* Header */}
              <div className="p-4 border-b border-gray-800 flex-shrink-0">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">TS</span>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">
                        {projects[0].title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                        {projects[0].description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {projects[0].tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-white transition-colors flex-shrink-0">
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Code Editor */}
              <div className="bg-gray-950/90 flex-1 overflow-hidden flex flex-col">
                {/* Editor tabs */}
                <div className="flex items-center px-4 py-2 border-b border-gray-800/50 bg-gray-900/50">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-xs text-gray-400">
                    advanced-rag-pipeline.ts
                  </div>
                </div>
                
                {/* Code content */}
                <div className="flex-1 overflow-auto">
                  <div className="flex">
                    {/* Line numbers */}
                    <div className="bg-gray-900/30 px-3 py-4 text-xs text-gray-500 select-none border-r border-gray-800/50">
                      {projects[0].codePreview.split('\n').map((_, index) => (
                        <div key={index} className="leading-6">
                          {index + 1}
                        </div>
                      ))}
                    </div>
                    
                    {/* Code */}
                    <div className="flex-1 p-4 overflow-x-auto">
                      <pre className="text-sm leading-6">
                        <code className="text-gray-300">
                          {projects[0].codePreview.split('\n').map((line, index) => (
                            <div key={index} className="min-h-[24px]">
                              {line.split(/(\bimport\b|\bfrom\b|\bclass\b|\binterface\b|\basync\b|\bawait\b|\bconst\b|\bprivate\b|\bconstructor\b|\bnew\b)/).map((part, partIndex) => {
                                if (['import', 'from', 'class', 'interface', 'async', 'await', 'const', 'private', 'constructor', 'new'].includes(part)) {
                                  return <span key={partIndex} className="text-purple-400">{part}</span>;
                                }
                                if (part.match(/^"[^"]*"$/)) {
                                  return <span key={partIndex} className="text-green-400">{part}</span>;
                                }
                                if (part.match(/^\/\/.*/)) {
                                  return <span key={partIndex} className="text-gray-500">{part}</span>;
                                }
                                if (part.match(/^[A-Z][a-zA-Z]*$/)) {
                                  return <span key={partIndex} className="text-blue-400">{part}</span>;
                                }
                                return <span key={partIndex}>{part}</span>;
                              })}
                            </div>
                          ))}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;