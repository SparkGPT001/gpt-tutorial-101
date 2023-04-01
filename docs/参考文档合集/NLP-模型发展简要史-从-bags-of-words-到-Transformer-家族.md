---
description: 扩展阅读
---

# NLP 模型发展简要史：从 bags of words 到 Transformer 家族

## 速览

本文全面概述了自词袋模型到Transformer家族的自然语言处理（NLP）模型的发展历程。它提供了包括词袋、TF-IDF、Word2Vec、RNN、Transformer、BERT、GPT、RoBERTa、XLM、Reformer、ELECTRA、T5等关键模型在内的时间轴，这些模型已经在多年的时间内塑造了这个领域。作者对每个模型进行了个人概述，讨论了它的工作原理、特点和局限性。

原文链接：

[A brief timeline of NLP from Bag of Words to the Transformer family](https://medium.com/nlplanet/a-brief-timeline-of-nlp-from-bag-of-words-to-the-transformer-family-7caad8bbba56)

## **A Brief Timeline of NLP from Bag of Words to the Transformer Family**

BOW, TF-IDF, Word2Vec, Transformer, BERT, GPT, RoBERTa, XLM, Reformer, ELECTRA, T5, and many others

<figure><img src={require("../assets/nlp-history-1.png").default} alt=""></img><figcaption></figcaption></figure>

> Hello fellow NLP enthusiasts! As the race towards finding better and better neural networks for language modeling continues, I thought it might be a good time to get an overview of the progress made over the years. Enjoy! 😄

Disclaimer: This article is not a complete list of research done in NLP, which would struggle to fit even in several books! Rather, it is a personal overview of some of the models that have influenced the research of the field. I’ll try to make it simple and not simplistic as much as I can, therefore take the article as a starting point to delve into the field.

That said, here is the list of models!

* [**Bag of Words (BOW)**](https://en.wikipedia.org/wiki/Bag-of-words\_model) \[1954]: count the occurrences of each word in the documents and use them as features.
* [**TF-IDF**](https://en.wikipedia.org/wiki/Tf%E2%80%93idf) \[1972]: the BOW scores are modified so that rare words have high scores and common words have low scores.
* [**Word2Vec**](https://arxiv.org/abs/1301.3781) \[2013]: each word is mapped to a high-dimensional vector called word embedding, which captures its semantic. Word embeddings are learned by a neural network looking for word correlations on a large corpus.
* [**RNN**](https://en.wikipedia.org/wiki/Recurrent\_neural\_network) \[1986]: RNNs compute document embeddings leveraging word context in sentences, which was not possible with word embeddings alone. Later evolved with [**LSTM**](http://www.bioinf.jku.at/publications/older/2604.pdf) \[1997] to capture long-term dependencies, and to [**Bidirectional RNN**](https://ieeexplore.ieee.org/document/650093) \[1997] to capture left-to-right and right-to-left dependencies. Eventually, [**Encoder-Decoder RNNs**](https://proceedings.neurips.cc/paper/2014/file/a14ac55a4f27472c5d894ec1c3c743d2-Paper.pdf) \[2014] emerged, where an RNN creates a document embedding (i.e. the encoder) and another RNN decodes it into text (i.e. the decoder).
* [**Transformer**](https://arxiv.org/abs/1706.03762) \[2017]: an encoder-decoder model that leverages attention mechanisms to compute better embeddings and to better align output to input.
* [**BERT**](https://arxiv.org/abs/1810.04805) \[2018]: bidirectional Transformer pre-trained using a combination of Masked Language Modeling and Next Sentence Prediction objectives. It uses global attention.
* [**GPT**](https://s3-us-west-2.amazonaws.com/openai-assets/research-covers/language-unsupervised/language\_understanding\_paper.pdf) \[2018]: the first autoregressive model based on the Transformer architecture. Later evolved into [**GPT-2**](https://d4mucfpksywv.cloudfront.net/better-language-models/language\_models\_are\_unsupervised\_multitask\_learners.pdf) \[2019], a bigger and optimized version of GPT pre-trained on WebText, and [**GPT-3**](https://arxiv.org/abs/2005.14165) \[2020], a further bigger and optimized version of GPT-2, pre-trained on Common Crawl.
* [**CTRL**](https://arxiv.org/abs/1909.05858) \[2019]: similar to GPT but with control codes for conditional text generation.
* [**Transformer-XL**](https://arxiv.org/abs/1901.02860) \[2019]: it’s an autoregressive Transformer that can reuse previously computed hidden-states to attend to longer context.
* [**ALBERT**](https://arxiv.org/abs/1909.11942) \[2019]: a lighter version of BERT, where (1) Next Sentence Prediction is replaced by Sentence Order Prediction, and (2) parameter-reduction techniques are used for lower memory consumption and faster training.
* [**RoBERTa**](https://arxiv.org/abs/1907.11692) \[2019]: better version of BERT, where (1) the Masked Language Modeling objective is dynamic, (2) the Next Sentence Prediction objective is dropped, (3) the BPE tokenizer is employed, and (4) better hyperparameters are used.
* [**XLM**](https://arxiv.org/abs/1901.07291) \[2019]: Transformer pre-trained on a corpus of several languages using objectives like Causal Language Modeling, Masked Language Modeling, and Translation Language Modeling.
* [**XLNet**](https://arxiv.org/abs/1906.08237) \[2019]: Transformer-XL with a generalized autoregressive pre-training method that enables learning bidirectional dependences.
* [**PEGASUS**](https://arxiv.org/abs/1912.08777) \[2019]: a bidirectional encoder and a left-to-right decoder pre-trained with Masked Language Modeling and Gap Sentence Generation objectives.
* [**DistilBERT**](https://arxiv.org/abs/1910.01108) \[2019]: same as BERT but smaller and faster, while preserving over 95% of BERT’s performances. Trained by distillation of the pre-trained BERT model.
* [**XLM-RoBERTa**](https://arxiv.org/pdf/1911.02116.pdf) \[2019]: RoBERTa trained on a multilanguage corpus with the Masked Language Modeling objective.
* [**BART**](https://arxiv.org/abs/1910.13461) \[2019]: a bidirectional encoder and a left-to-right decoder trained by corrupting text with an arbitrary noising function and learning a model to reconstruct the original text.
* [**ConvBERT**](https://arxiv.org/abs/2008.02496) \[2019]: a better version of BERT, where self-attention blocks are replaced with new ones that leverage convolutions to better model global and local context.
* [**Funnel Transformer**](https://arxiv.org/abs/2006.03236) \[2020]: a type of Transformer that gradually compresses the sequence of hidden states to a shorter one and hence reduces the computation cost.
* [**Reformer**](https://arxiv.org/abs/2001.04451) \[2020]: a more efficient Transformer thanks to local-sensitive hashing attention, axial position encoding, and other optimizations.
* [**T5**](https://arxiv.org/abs/1910.10683) \[2020]: a bidirectional encoder and a left-to-right decoder pre-trained on a mix of unsupervised and supervised tasks.
* [**Longformer**](https://arxiv.org/abs/2004.05150) \[2020]: a Transformer model replacing the attention matrices with sparse matrices for higher training efficiency.
* [**ProphetNet**](https://arxiv.org/abs/2001.04063) \[2020]: a Transformer model trained with the Future N-gram Prediction objective and with a novel self-attention mechanism.
* [**ELECTRA**](https://arxiv.org/abs/2003.10555) \[2020]: same as BERT but lighter and better. The model is trained with the Replaced Token Detection objective.
* [**Switch Transformers**](https://arxiv.org/abs/2101.03961) \[2021]: a sparsely-activated expert Transformer model that aims to simplify and improve over Mixture of Experts.

Here is an infographic highlighting all the models cited in this article.

<figure><img src={require("../assets/nlp-history-2.png").default} alt=""></img><figcaption></figcaption></figure>
