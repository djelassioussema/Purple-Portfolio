import React from 'react';
import { ExternalLink, Copy } from 'lucide-react';

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
    const retrievalPromises = rewrittenQueries.map(async (q) => {`
    },
    {
      icon: '🐍',
      title: 'Distributed ML Training with Kubernetes & Ray',
      description: 'Scalable machine learning pipeline with distributed training, hyperparameter optimization, and model serving',
      tags: ['Python', 'Kubernetes', 'Ray', 'MLflow', 'Docker'],
      codePreview: null
    },
    {
      icon: '⚡',
      title: 'Event-Driven Microservices with CQRS & Event Sourcing',
      description: 'Scalable microservices architecture using CQRS, Event Sourcing, and distributed event streaming with Kafka',
      tags: ['Node.js', 'Kafka', 'MongoDB', 'Redis', 'Docker'],
      codePreview: null
    },
    {
      icon: '🖥️',
      title: 'GPU-Accelerated Computer Vision Pipeline',
      description: 'High-performance computer vision system with CUDA acceleration, real-time object detection, and distributed processing',
      tags: ['Python', 'CUDA', 'OpenCV', 'TensorRT', 'FastAPI'],
      codePreview: null
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Project cards */}
          <div className="lg:col-span-1 space-y-6">
            {projects.slice(1).map((project, index) => (
              <div
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">{project.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
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

          {/* Featured project with code */}
          <div className="lg:col-span-2">
            <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-500">
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">{projects[0].icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {projects[0].title}
                      </h3>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {projects[0].description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {projects[0].tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-white transition-colors">
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Code preview */}
              <div className="bg-gray-950/80 p-6 overflow-x-auto">
                <pre className="text-sm text-gray-300 leading-relaxed">
                  <code className="language-typescript">
                    {projects[0].codePreview}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;